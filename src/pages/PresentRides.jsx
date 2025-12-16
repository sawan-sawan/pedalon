import React from "react";
import "./PresentRides.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
    FaRoute,
    FaClock,
    FaMountain,
    FaMapMarkerAlt,
    FaBicycle
} from "react-icons/fa";

const liveRideData = {
    isLive: false, // <-- Jab ride karoge tab isse true kar dena
    title: "Phillaur To Phagwara NH44",
    status: "Currently Riding",
    date: "Today, 26 Nov 2025",
    startTime: "3:30 PM IST",
    distance: 50,
    elevation: 1200,
    currentLocation: "GT NH 44 Road",
    description: "best highway, beautiful view like mountains at GT NH 44 Road highway bridge climb.",
    mapImage: "/img/map.png",
};

const PresentRides = () => {
    useScrollToTop();

    return (
        <section className="present-ride-section">
            <div className="section-header">
                <h3 className="section-subtitle">THE CORE JOURNEY</h3>
                <h2 className="section-title">On The Saddle</h2>
            </div>

            {liveRideData.isLive ? (
                /* --- Case 1: Jb aap ride kr rhe ho (LIVE) --- */
                <div className="present-ride-container">
                    <div className="map-panel">
                        <img
                            src={liveRideData.mapImage}
                            alt="Live ride map"
                            className="map-placeholder-img"
                        />
                        <span className="live-badge-map">LIVE</span>
                    </div>

                    <div className="data-panel">
                        <span className="live-status">{liveRideData.status}</span>
                        <h2 className="present-ride-title">{liveRideData.title}</h2>
                        <p className="present-ride-date">{liveRideData.date}</p>

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

                        <div className="present-ride-description">
                            <h3>About This Ride</h3>
                            <p>{liveRideData.description}</p>
                        </div>

                        <a href="https://www.strava.com/athletes/pedal_on" className="btn-trifecta-outline">
                            Follow on Strava
                        </a>
                    </div>
                </div>
            ) : (
                /* --- Case 2: Jb aap ride NHI kr rhe (OFFLINE) --- */
                <div className="offline-ride-container">
                    <div className="offline-card">
                        <FaBicycle className="offline-icon" />
                        <h2>Currently Off the Saddle</h2>
                        <p>I'm currently resting and planning the next big journey. Catch me live here during my next ride!</p>
                        <div className="next-hint">Stay tuned for the next adventure.</div>
                        <a href="https://www.strava.com/athletes/pedal_on" className="btn-trifecta">
                            Check Recent Activities on Strava
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PresentRides;