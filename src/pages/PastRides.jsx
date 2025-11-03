import React, { useState } from "react";
import "./PastRides.css"; // हम यह CSS फ़ाइल नीचे बनाएंगे
import { FaCalendarAlt, FaRoute, FaMountain, FaTimes } from "react-icons/fa";
import { useScrollToTop } from "../hooks/useScrollToTop";


const DUMMY_RIDES = [
  {
    id: 1,
    title: "The Great Leh-Manali Expedition",
    date: "July 2024",
    distance: 475,
    elevation: 5200,
    coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Leh-Manali+Ride",
    description: "An epic 9-day journey through the Himalayas, testing limits and offering breathtaking views.",
    gallery: ["https://placehold.co/800x500/0a0a0a/60a5fa?text=Leh+Gallery+1", "https://placehold.co/800x500/0a0a0a/60a5fa?text=Leh+Gallery+2"],
  },
  {
    id: 2,
    title: "Mumbai Midnight Madness",
    date: "May 2024",
    distance: 110,
    elevation: 300,
    coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Mumbai+Midnight",
    description: "Riding through the empty, silent streets of Mumbai at 3 AM was a surreal experience.",
    gallery: ["https://placehold.co/800x500/0a0a0a/60a5fa?text=Mumbai+Gallery+1"],
  },
  {
    id: 3,
    title: "Western Ghats Monsoon",
    date: "August 2023",
    distance: 220,
    elevation: 1500,
    coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Western+Ghats",
    description: "A wet and wild ride through the lush greenery of the Western Ghats during peak monsoon.",
    gallery: ["https://placehold.co/800x500/0a0a0a/60a5fa?text=Ghats+Gallery+1"],
  },
  // ...यहाँ और राइड्स डालें (मैंने कॉपी-पेस्ट किया है)
  { id: 4, title: "Rajasthan Desert Dash", date: "Nov 2023", distance: 600, elevation: 200, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Rajasthan+Dash", description: "...", gallery: [] },
  { id: 5, title: "Coastal Karnataka Ride", date: "Jan 2023", distance: 350, elevation: 500, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Karnataka+Coast", description: "...", gallery: [] },
  { id: 6, title: "Tour of Nilgiris", date: "Oct 2022", distance: 400, elevation: 7000, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Nilgiris+Tour", description: "...", gallery: [] },
  { id: 7, title: "Local Sunday Morning", date: "Every Sunday", distance: 50, elevation: 100, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Sunday+Ride", description: "...", gallery: [] },
  { id: 8, title: "Pune to Goa", date: "Dec 2022", distance: 550, elevation: 3000, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Pune+to+Goa", description: "...", gallery: [] },
  { id: 9, title: "Spiti Valley Adventure", date: "Sep 2022", distance: 300, elevation: 8000, coverImage: "https://placehold.co/600x400/0a0a0a/60a5fa?text=Spiti+Valley", description: "...", gallery: [] },
];

const RIDES_PER_PAGE = 6; // एक बार में कितनी राइड्स दिखानी हैं

const PastRides = () => {
  // --- 2. स्टेट्स (States) ---
  const [visibleRides, setVisibleRides] = useState(
    DUMMY_RIDES.slice(0, RIDES_PER_PAGE)
  );
  const [selectedRide, setSelectedRide] = useState(null); // कौनसी राइड पॉप-अप में दिखेगी

  // --- 3. "Load More" का लॉजिक ---
  const handleLoadMore = () => {
    const currentCount = visibleRides.length;
    const nextRides = DUMMY_RIDES.slice(
      currentCount,
      currentCount + RIDES_PER_PAGE
    );
    setVisibleRides([...visibleRides, ...nextRides]);
  };

  // --- 4. Modal (पॉप-अप) को खोलने और बंद करने का लॉजिक ---
  const openModal = (ride) => {
    setSelectedRide(ride);
  };

  const closeModal = () => {
    setSelectedRide(null);
  };
    useScrollToTop();

  return (
    <>
      <section className="past-rides-section">
        {/* --- 1. हेडर (आपके Trifecta जैसा) --- */}
        <div className="section-header">
          <h3 className="section-subtitle">THE CORE JOURNEY</h3>
          <h2 className="section-title">The Archives</h2>
        </div>

        {/* --- 2. फ़िल्टर बार --- */}
        <div className="filter-bar">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">2024</button>
          <button className="filter-btn">2023</button>
          <button className="filter-btn">Tours</button>
        </div>

        {/* --- 3. राइड्स का ग्रिड --- */}
        <div className="rides-grid-container">
          {visibleRides.map((ride) => (
            <div
              className="ride-card"
              key={ride.id}
              onClick={() => openModal(ride)}
            >
              <img
                src={ride.coverImage}
                alt={ride.title}
                className="ride-card-img"
                loading="lazy" // <-- परफॉरमेंस के लिए!
              />
              <div className="ride-card-content">
                <span className="ride-card-date">{ride.date}</span>
                <h3 className="ride-card-title">{ride.title}</h3>
                <div className="ride-card-stats">
                  <span>
                    <FaRoute /> {ride.distance} km
                  </span>
                  <span>
                    <FaMountain /> {ride.elevation} m
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 4. "Load More" बटन --- */}
        {visibleRides.length < DUMMY_RIDES.length && (
          <div className="load-more-container">
            {/* यह .btn-trifecta क्लास आपकी Trifecta.css से आएगी */}
            <button onClick={handleLoadMore} className="btn-trifecta">
              Load More Rides
            </button>
          </div>
        )}
      </section>

      {/* --- 5. Modal (पॉप-अप) --- */}
      {/* यह तभी दिखेगा जब selectedRide में डेटा होगा */}
      {selectedRide && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // अंदर क्लिक करने पर बंद न हो
          >
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            {/* --- Modal का कंटेंट --- */}
            <img 
              src={selectedRide.gallery[0] || selectedRide.coverImage} 
              alt={selectedRide.title} 
              className="modal-cover-img" 
            />
            <div className="modal-header">
              <h2 className="modal-title">{selectedRide.title}</h2>
              <span className="modal-date">
                <FaCalendarAlt /> {selectedRide.date}
              </span>
            </div>

            <div className="modal-stats">
              <span>
                <FaRoute /> <strong>{selectedRide.distance} km</strong> Distance
              </span>
              <span>
                <FaMountain /> <strong>{selectedRide.elevation} m</strong> Elevation
              </span>
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
