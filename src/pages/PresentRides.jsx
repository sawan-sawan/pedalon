import React from "react";
import "./PresentRides.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
    FaRoute,
    FaClock,
    FaMountain,
    FaMapMarkerAlt,
} from "react-icons/fa";


const liveRideData = {
    isLive: true,
    title: "Aravalli Hill Climb",
    status: "Currently Riding", // या "Starts at 5:00 AM"
    date: "Today, 3 Nov 2025",
    startTime: "5:00 AM IST",
    distance: 85, // km
    elevation: 1200, // meters
    currentLocation: "Gurugram-Faridabad Road",
    description:
        "Taking on the steep climbs of the Aravalli range. This route is known for its tough gradients and beautiful, rugged terrain. Following the main highway loop.",
    // यह आपके हाइलाइट किए गए रूट की एक तस्वीर होगी
    mapImage: "/Public/img/img9.png",
};

const PresentRides = () => {
    useScrollToTop();

    return (
        <section className="present-ride-section">
            {/* --- 1. हेडर (Trifecta जैसा) --- */}
            <div className="section-header">
                <h3 className="section-subtitle">THE CORE JOURNEY</h3>
                <h2 className="section-title">On The Saddle</h2>
            </div>

            {/* --- 2. प्रेजेंट राइड डैशबोर्ड --- */}
            <div className="present-ride-container">

                {/* --- कॉलम 1: मैप --- */}
                <div className="map-panel">
                    <img
                        src={liveRideData.mapImage}
                        alt="Live ride map"
                        className="map-placeholder-img"
                    />
                    {liveRideData.isLive && (
                        <span className="live-badge-map">LIVE</span>
                    )}
                </div>

                {/* --- कॉलम 2: जानकारी --- */}
                <div className="data-panel">
                    {liveRideData.isLive && (
                        <span className="live-status">{liveRideData.status}</span>
                    )}
                    <h2 className="present-ride-title">{liveRideData.title}</h2>
                    <p className="present-ride-date">{liveRideData.date}</p>

                    {/* --- मुख्य आँकड़े --- */}
                    <div className="present-stats-grid">
                        <div className="stat-item">
                            <FaRoute size={20} />
                            <span>
                                <strong>{liveRideData.distance} km</strong>
                                Planned Distance
                            </span>
                        </div>
                        <div className="stat-item">
                            <FaMountain size={20} />
                            <span>
                                <strong>{liveRideData.elevation} m</strong>
                                Total Elevation
                            </span>
                        </div>
                        <div className="stat-item">
                            <FaClock size={20} />
                            <span>
                                <strong>{liveRideData.startTime}</strong>
                                Start Time
                            </span>
                        </div>
                        <div className="stat-item">
                            <FaMapMarkerAlt size={20} />
                            <span>
                                <strong>{liveRideData.currentLocation}</strong>
                                Current Area
                            </span>
                        </div>
                    </div>

                    {/* --- विवरण --- */}
                    <div className="present-ride-description">
                        <h3>About This Ride</h3>
                        <p>{liveRideData.description}</p>
                    </div>

                    <a href="#strava" className="btn-trifecta-outline">
                        Follow on Strava
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PresentRides;