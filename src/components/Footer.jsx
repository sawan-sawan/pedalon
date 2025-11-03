import React from "react";
import "./Footer.css";

// वही आइकन्स जो हमने CTA में इस्तेमाल किए
import { FaStrava, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Part: Logo, Links, Socials */}
        <div className="footer-top">
          
          {/* Column 1: Brand/Logo */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Pedalon
            </a>
            <p className="footer-tagline">
              Every Pedal Tells a Story.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About Me</a>
            <a href="/journey/past" className="footer-link">Past Rides</a>
            <a href="/blog" className="footer-link">Blog / Stories</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>

          {/* Column 3: Social Media */}
          <div className="footer-social">
            <h4 className="footer-heading">Follow My Journey</h4>
            <div className="footer-social-icons">
              <a
                href="https://strava.com/your-profile" // <-- अपना लिंक
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Strava Profile"
              >
                <FaStrava />
              </a>
              <a
                href="https://instagram.com/your-profile" // <-- अपना लिंक
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/your-channel" // <-- अपना लिंक
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

        {/* Bottom Part: Copyright */}
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