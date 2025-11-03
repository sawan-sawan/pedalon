import React from "react";

import "./Trifecta.css";
import { FaArchive, FaBroadcastTower, FaRegMap } from "react-icons/fa";
import { Link } from "react-router-dom";
const Trifecta = () => {
  return (
    // section-wrapper 100vh/100vw का काम करेगा
    <section id="trifecta" className="trifecta-section">

      {/* --- NEW: Section Header --- */}
      <div className="section-header">
        <h3 className="section-subtitle">THE CORE JOURNEY</h3>
        <h2 className="section-title">My Past, Present & Future</h2>
      </div>

      <div className="trifecta-container">
        {/* --- CARD 1: PAST --- */}
        <div className="trifecta-card past-card">
          <div
            className="card-bg"
            style={{ backgroundImage: "url(/img/img4.jpg)" }}
          ></div>
          <div className="card-content">
            <FaArchive size={24} className="card-icon" />
            <h3 className="card-subtitle">PAST</h3>
            <h2 className="card-title">The Archives</h2>
            <p className="card-description">
              Every mountain climbed and every mile conquered. Explore the gallery
              and stories from my most memorable journeys.
            </p>
            <Link to="/past-rides" className="btn-trifecta">
              See The Gallery
            </Link>
          </div>
        </div>

        {/* --- CARD 2: PRESENT --- */}
        <div className="trifecta-card present-card">
          <span className="live-badge">LIVE</span>
          <div
            className="card-bg"
            style={{ backgroundImage: "url(/img/img5.jpg)" }}
          ></div>
          <div className="card-content">
            <FaBroadcastTower size={24} className="card-icon" />
            <h3 className="card-subtitle">PRESENT</h3>
            <h2 className="card-title">On The Saddle</h2>
            <p className="card-description">
              Follow my current training, track my rides in real-time via Strava,
              and see what I'm preparing for right now.
            </p>
           <Link to="/present-rides" className="btn-trifecta">
              Track Me
            </Link>
          </div>
        </div>

        {/* --- CARD 3: FUTURE --- */}
        <div className="trifecta-card future-card">
          <div
            className="card-bg"
            style={{ backgroundImage: "url(/img/img6.jpg)" }}
          ></div>
          <div className="card-content">
            <FaRegMap size={24} className="card-icon" />
            <h3 className="card-subtitle">FUTURE</h3>
            <h2 className="card-title">The Next Summit</h2>
            <p className="card-description">
              The big one is coming. See the full plan, the gear, the route,
              and follow the preparations for the next epic adventure.
            </p>
          <Link to="/future-rides" className="btn-trifecta">
              See The Plannig
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trifecta;