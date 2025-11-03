import React, { useState, useEffect } from "react";
import "./FutureRides.css"; 
import { useScrollToTop } from "../hooks/useScrollToTop";

import { FaRoute, FaTachometerAlt, FaCog, FaListOl } from "react-icons/fa";


const futureRideData = {
  title: "Trans-Himalayan Expedition",
  subtitle: "Srinagar to Leh",
  targetDate: "2026-06-01T05:00:00", // (साल-महीना-दिन T घंटा:मिनट:सेकंड)
  description:
    "This is the big one. A 10-day self-supported journey across the mighty Himalayas, covering three of the world's highest motorable passes. This isn't just a ride; it's a pilgrimage.",
  routeImage: "https://placehold.co/1200x600/0a0a0a/60a5fa?text=Planned+Route+Map",
  gear: ["All-Weather Tent", "Sub-zero Sleeping Bag", "GPS Navigator", "Portable Stove"],
  training: ["8,000km Base Mileage", "High-Altitude Simulation", "Strength Training", "Mental Conditioning"],
};

// --- 2. बकेट लिस्ट डेटा ---
const bucketList = [
  "Ride the entire Manali-Leh Highway (Solo)",
  "Tour of the North-East (Seven Sisters)",
  "Kanyakumari to Kashmir (K2K)",
  "Paris-Brest-Paris (PBP) Randonneur",
];

const FutureRides = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  // --- 3. काउंटडाउन टाइमर का लॉजिक ---
  useEffect(() => {
    const target = new Date(futureRideData.targetDate);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // कॉम्पोनेंट हटने पर इंटरवल को साफ़ करें
    return () => clearInterval(interval);
  }, []); // यह इफ़ेक्ट सिर्फ एक बार चलता है
    useScrollToTop();

  return (
    <section className="future-ride-section">
      {/* --- हेडर --- */}
      <div className="section-header">
        <h3 className="section-subtitle">THE CORE JOURNEY</h3>
        <h2 className="section-title">The Next Summit</h2>
      </div>

      {/* --- 4. मुख्य राइड का फोकस --- */}
      <div className="future-ride-container">
        <div className="future-header">
          <h2 className="future-ride-title">{futureRideData.title}</h2>
          <p className="future-ride-subtitle">{futureRideData.subtitle}</p>
        </div>

        {/* --- 5. काउंटडाउन टाइमर --- */}
        {timeLeft ? (
          <div className="countdown-timer">
            <div className="time-box"><span>{String(timeLeft.days).padStart(2, "0")}</span>Days</div>
            <div className="time-box"><span>{String(timeLeft.hours).padStart(2, "0")}</span>Hours</div>
            <div className="time-box"><span>{String(timeLeft.minutes).padStart(2, "0")}</span>Mins</div>
            <div className="time-box"><span>{String(timeLeft.seconds).padStart(2, "0")}</span>Secs</div>
          </div>
        ) : (
          <div className="countdown-loading">Loading countdown...</div>
        )}

        <p className="future-ride-description">{futureRideData.description}</p>

        {/* --- 6. "ब्लूप्रिंट" के तीन पैनल --- */}
        <div className="blueprint-grid">
          {/* पैनल 1: The Route */}
          <div className="blueprint-panel">
            <div className="panel-header">
              <FaRoute />
              <h3>The Route</h3>
            </div>
            <img src={futureRideData.routeImage} alt="Planned Route" className="route-map-img" />
          </div>

          {/* पैनल 2: The Gear */}
          <div className="blueprint-panel">
            <div className="panel-header">
              <FaCog />
              <h3>The Gear</h3>
            </div>
            <ul className="blueprint-list">
              {futureRideData.gear.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* पैनल 3: The Training */}
          <div className="blueprint-panel">
            <div className="panel-header">
              <FaTachometerAlt />
              <h3>The Training</h3>
            </div>
            <ul className="blueprint-list">
              {futureRideData.training.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- 7. बकेट लिस्ट --- */}
      <div className="bucket-list-container">
        <div className="panel-header">
          <FaListOl />
          <h3>My Bucket List</h3>
        </div>
        <ul className="bucket-list">
          {bucketList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default FutureRides;