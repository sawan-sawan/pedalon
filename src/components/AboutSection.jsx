import React from "react";
import "./AboutSection.css";
import { FaTachometerAlt, FaMountain, FaBicycle } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <section className="about-section">
      
      {/* --- NEW: Section Header (Copied from Trifecta) --- */}
      <div className="section-header">
        <h3 className="section-subtitle">THE RIDER</h3>
        <h2 className="section-title">Behind the Pedals</h2>
      </div>

      <div className="about-container">
        {/* --- LEFT COLUMN: IMAGE --- */}
        <div className="about-image-wrapper">
          <img
            src="/img/img5.jpg"
            alt="The Rider - Pedalon"
            className="about-image"
          />
        </div>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="about-content">
          {/* Header has been moved up */}
          
          <p className="about-description">
            Hello! I'm [Sawan], the person behind Pedalon. For me,
            cycling isn't just a hobby or a sport; it's freedom. It's my way
            of exploring the world, pushing my limits, and finding peace.
            This website is my personal logbook—a collection of stories from
            the road (past, present, and future).
          </p>

          {/* --- Stats Section --- */}
          <div className="about-stats-container">
            <div className="stat-card">
              <FaTachometerAlt className="stat-icon" />
              <span className="stat-value">15,000+</span>
              <span className="stat-label">KMs Cycled</span>
            </div>
            <div className="stat-card">
              <FaMountain className="stat-icon" />
              <span className="stat-value">5,359m</span>
              <span className="stat-label">Highest Ascent</span>
            </div>
            <div className="stat-card">
              <FaBicycle className="stat-icon" />
              <span className="stat-value">Triban</span>
              <span className="stat-label">My Bike</span>
            </div>
          </div>

         <Link to="/about" className="btn-about">
           Read More
         </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;