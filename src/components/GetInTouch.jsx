import React from "react";
import { Link } from "react-router-dom";
import "./GetInTouch.css";
import { FaStrava, FaInstagram, FaYoutube } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        <h3 className="section-subtitle">GET IN TOUCH</h3>
        <h2 className="section-title">Join the Journey</h2>

        <p className="cta-description">
          Follow my adventures on Strava and Instagram, or send me a message
          about my rides, gear, or anything in between.
        </p>

        <div className="cta-social-links">
          <a
            href="https://www.strava.com/athletes/pedal_on"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="Strava Profile"
          >
            <FaStrava />
          </a>
          <a
            href="https://instagram.com/pedalon987"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@pedalon987?si=YE4D578FZVOZ6vdk"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="YouTube Channel"
          >
            <FaYoutube />
          </a>
        </div>

        {/* 👇 Ye Link reload nahi karega */}
        <Link to="/contact" className="btn-cta-primary">
          Send Me a Message
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
