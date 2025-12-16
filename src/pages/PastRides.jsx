import React, { useState, useEffect } from "react";
import "./PastRides.css";
import { FaCalendarAlt, FaRoute, FaMountain, FaTimes } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";
// Map libraries
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import gpxParser from "gpxparser";

// Helper component: Map ko auto-center karne ke liye
const ZoomToRoute = ({ route }) => {
  const map = useMap();
  useEffect(() => {
    if (route && route.length > 0) {
      map.fitBounds(route, { padding: [20, 20] });
    }
  }, [route, map]);
  return null;
};

const DUMMY_RIDES = [
  {
    id: 1,
    title: "The Great NH44 Highway Ride Phillaur to Phagwara",
    date: "26 November 2025",
    distance: 37,
    elevation: 155,
    coverImage: "/img/pastimg1.png",
    gpxFile: "/gpx/phillaur-to-phagwara.gpx", // Public folder mein file rakhein
    description: "An exhilarating ride along the NH44 highway...",
    gallery: ["/img/pastimg1.png"],
  },
];

const RIDES_PER_PAGE = 6;

const PastRides = () => {
  const [visibleRides, setVisibleRides] = useState(DUMMY_RIDES.slice(0, RIDES_PER_PAGE));
  const [selectedRide, setSelectedRide] = useState(null);
  const [routeData, setRouteData] = useState([]); // Map coordinates ke liye state

  useScrollToTop();

  // GPX Load karne ka logic jab modal khule
  useEffect(() => {
    if (selectedRide && selectedRide.gpxFile) {
      fetch(selectedRide.gpxFile)
        .then((res) => res.text())
        .then((xml) => {
          const gpx = new gpxParser();
          gpx.parse(xml);
          const positions = gpx.tracks[0].points.map((p) => [p.lat, p.lon]);
          setRouteData(positions);
        })
        .catch((err) => console.error("Error loading GPX:", err));
    } else {
      setRouteData([]); // Modal band hone par clear karein
    }
  }, [selectedRide]);

  const openModal = (ride) => setSelectedRide(ride);
  const closeModal = () => setSelectedRide(null);

  return (
    <>
      <section className="past-rides-section">
        {/* ... Header and Filters (Aapka existing code) ... */}
        
        <div className="rides-grid-container">
          {visibleRides.map((ride) => (
            <div className="ride-card" key={ride.id} onClick={() => openModal(ride)}>
              <img src={ride.coverImage} alt={ride.title} className="ride-card-img" />
              <div className="ride-card-content">
                <span className="ride-card-date">{ride.date}</span>
                <h3 className="ride-card-title">{ride.title}</h3>
                <div className="ride-card-stats">
                  <span><FaRoute /> {ride.distance} km</span>
                  <span><FaMountain /> {ride.elevation} m</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modal with GPX Map --- */}
      {selectedRide && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}><FaTimes /></button>

            {/* Map Section */}
            <div className="modal-map-container" style={{ height: "300px", width: "100%", borderRadius: "10px", overflow: "hidden", marginBottom: "20px" }}>
              <MapContainer center={[31.12, 75.77]} zoom={11} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {routeData.length > 0 && (
                  <>
                    <Polyline positions={routeData} color="#e53e3e" weight={4} />
                    <ZoomToRoute route={routeData} />
                  </>
                )}
              </MapContainer>
            </div>

            <div className="modal-header">
              <h2 className="modal-title">{selectedRide.title}</h2>
              <span className="modal-date"><FaCalendarAlt /> {selectedRide.date}</span>
            </div>

            <div className="modal-stats">
              <span><FaRoute /> <strong>{selectedRide.distance} km</strong> Distance</span>
              <span><FaMountain /> <strong>{selectedRide.elevation} m</strong> Elevation</span>
            </div>

            <div className="modal-body">
              <p>{selectedRide.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PastRides;