import React, { useState, useEffect, useMemo } from "react";
import "./PastRides.css";
import { FaCalendarAlt, FaRoute, FaMountain, FaTimes, FaExternalLinkAlt } from "react-icons/fa"; // FaExternalLinkAlt add kiya
import { useScrollToTop } from "../hooks/useScrollToTop";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import gpxParser from "gpxparser";

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
    gpxFile: "/gpx/phillaur-to-phagwara.gpx",
    stravaId: "16571311745", // Strava Activity ID yahan rakhein
    stravaUrl: "https://www.strava.com/activities/16571311745", // Direct link ke liye
    description: "An exhilarating ride along the NH44 highway...",
    gallery: ["/img/pastimg1.png"],
    category: "Highway"
  },
];

const PastRides = () => {
  const [selectedRide, setSelectedRide] = useState(null);
  const [routeData, setRouteData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useScrollToTop();

  // Strava Script load karne ke liye useEffect
  useEffect(() => {
    if (selectedRide) {
      const script = document.createElement("script");
      script.src = "https://strava-embeds.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup jab modal band ho
      };
    }
  }, [selectedRide]);

  const filteredRides = useMemo(() => {
    if (activeFilter === "All") return DUMMY_RIDES;
    if (activeFilter === "Tours") return DUMMY_RIDES.filter(ride => ride.category === "Tours");
    return DUMMY_RIDES.filter(ride => ride.date.includes(activeFilter));
  }, [activeFilter]);

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
      setRouteData([]);
    }
  }, [selectedRide]);

  const openModal = (ride) => setSelectedRide(ride);
  const closeModal = () => setSelectedRide(null);

  return (
    <>
      <section className="past-rides-section">
        <div className="section-header">
          <h3 className="section-subtitle">THE CORE JOURNEY</h3>
          <h2 className="section-title">The Archives</h2>
        </div>

        <div className="filter-bar">
          {["All", "2025", "2024", "Tours"].map((filter) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="rides-grid-container">
          {filteredRides.map((ride) => (
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

      {/* --- Modal --- */}
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
              <div className="modal-actions">
                  <span className="modal-date"><FaCalendarAlt /> {selectedRide.date}</span>
                  {/* Strava Direct Button */}
                  <a 
                    href={selectedRide.stravaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="strava-button"
                  >
                    View on Strava <FaExternalLinkAlt />
                  </a>
              </div>
            </div>

            <div className="modal-stats">
              <span><FaRoute /> <strong>{selectedRide.distance} km</strong> Distance</span>
              <span><FaMountain /> <strong>{selectedRide.elevation} m</strong> Elevation</span>
            </div>

            <div className="modal-body">
              <p>{selectedRide.description}</p>
              
              {/* Strava Embed Widget */}
              <div className="strava-embed-wrapper" style={{ marginTop: "20px" }}>
                <div 
                  className="strava-embed-placeholder" 
                  data-embed-type="activity" 
                  data-embed-id={selectedRide.stravaId} 
                  data-style="standard"
                  data-from-embed="false"
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PastRides;