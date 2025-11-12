import React, { useState } from "react";
import "./ContactPage.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaStrava, FaYoutube } from "react-icons/fa";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  useScrollToTop();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_oaclg8n",
        "template_z1saw1a",
        formData,
        "N7Jsu-MhLNTHW7ocV"
      )
      .then(
        () => {
          setStatusType("success");
          setStatusMessage("✅ Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setStatusMessage("");
            setStatusType("");
          }, 3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusType("error");
          setStatusMessage("❌ Failed to send message. Please try again later.");
          setTimeout(() => {
            setStatusMessage("");
            setStatusType("");
          }, 3000);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      {statusMessage && (
        <div className={`status-popup ${statusType}`}>
          {statusMessage}
        </div>
      )}

      <header className="contact-header">
        <p className="subtitle">GET IN TOUCH</p>
        <h1>Join the Journey</h1>
        <p>
          Follow my adventures on Strava and Instagram, or send me a message
          about my rides, gear, or anything in between.
        </p>
        <div className="header-social-links">
          <a href="https://strava.com/athletes/pedal_on" target="_blank" rel="noopener noreferrer"><FaStrava /></a>
          <a href="https://instagram.com/pedalon987" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com/@pedalon987" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </header>

      <div id="contact" className="contact-container">
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-details-map-section">
          <div className="contact-info">
            <h2>Contact Details</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Ramghar, Phillaur, Punjab 144410</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>pedalon44@gmail.com</span>
            </div>
          </div>

          <div className="map-container">
            <h2>Find Us Here</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16758.755704229425!2d75.77580861685131!3d31.014342331329853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a861e0173b217%3A0xae53616102954a14!2sPhillaur%2C%20Punjab%20144410!5e1!3m2!1sen!2sin!4v1762481254616!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pedalon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
