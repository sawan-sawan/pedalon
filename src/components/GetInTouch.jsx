import React from "react";
import "./GetInTouch.css";

// Strava, Insta, YouTube icons
import { FaStrava, FaInstagram, FaYoutube } from "react-icons/fa";

const GetInTouch = () => { 
  return (
    <section id="contact" className="cta-section">
      {/* यह cta-container ही हमारा स्टाइल्ड कार्ड है */}
      <div className="cta-container">

        {/* Flow: Same header style */}
        <h3 className="section-subtitle">GET IN TOUCH</h3>
        <h2 className="section-title">Join the Journey</h2>

        <p className="cta-description">
          Follow my adventures on Strava and Instagram, or send me a message
          about my rides, gear, or anything in between.
        </p>

        {/* Social Media Links */}
        <div className="cta-social-links">
          <a
            href="https://www.strava.com/athletes/pedal_on" // <-- अपना लिंक यहाँ डालें
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="Strava Profile"
          >
            <FaStrava />
          </a>
          <a
            href="" // <-- अपना लिंक यहाँ डालें
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@pedalon987?si=YE4D578FZVOZ6vdk" // <-- अपना लिंक यहाँ डालें
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="YouTube Channel"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Primary CTA Button */}
        <a href="/contact" className="btn-cta-primary">
          Send Me a Messages
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;