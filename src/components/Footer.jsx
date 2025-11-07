import React from "react";
import "./Footer.css";

// Wahi icons
import { FaStrava, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Part: Ab 4 Columns */}
        <div className="footer-top">
          
          {/* Column 1: Brand/Logo (No Change) */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Pedalon
            </a>
            <p className="footer-tagline">
              Every Pedal Tells a Story.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="footer-links">
            <h4 className="footer-heading">Navigate</h4>
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About Me</a>
            <a href="/journey/past" className="footer-link">Past Rides</a>
          </div>

          {/* --- NEW Column 3: Explore --- */}
          {/* Humne links ko split kar diya hai */}
          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <a href="/blog" className="footer-link">Blog / Stories</a>
            <a href="/contact" className="footer-link">Contact</a>
            {/* Yeh naye links footer ko "full" look denge */}
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
          </div>

          {/* Column 4: Social Media (Pehle Column 3 tha) */}
          <div className="footer-social">
            <h4 className="footer-heading">Follow My Journey</h4>
            <div className="footer-social-icons">
              <a
                href="https://strava.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Strava Profile"
              >
                <FaStrava />
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="YouTube Channel"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Part: Copyright (No Change) */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Pedalon. All Rights Reserved. Be Better.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;