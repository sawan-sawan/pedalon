import React from "react";
import "./AboutPage.css"; // We'll create this new CSS file
import { useScrollToTop } from "../hooks/useScrollToTop";

import {
    FaBicycle,
    FaCode,
    FaMountain,
    FaTachometerAlt,
    FaGithub,
    FaLinkedin,
    FaStrava,
} from "react-icons/fa";

const AboutPage = () => {
    useScrollToTop();
    return (
        <section className="about-page-section">
            {/* --- 1. Header (like your existing style) --- */}
            <div className="section-header">
                <h3 className="section-subtitle">BEHIND THE PEDALS</h3>
                <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-page-container">
                {/* --- 2. Intro Text --- */}
                <p className="about-intro-text">
                    Hello! I'm [Sawan], the face behind Pedalon. For me, cycling
                    isn't just a hobby or a sport; it's freedom. It's my way
                    of exploring the world, pushing my limits, and finding peace.
                    But there's another side to me, beyond just pedaling...
                </p>

                {/* --- 3. "Two Passions" Grid --- */}
                <h3 className="passions-header">
                    Cyclist by Passion, Developer by Profession.
                </h3>
                <div className="about-grid-container">
                    {/* --- Card 1: The Cyclist --- */}
                    <div className="passion-card">
                        <div className="passion-card-header">
                            <FaBicycle className="passion-icon" />
                            <h3>The Cyclist</h3>
                        </div>
                        <p>
                            When I'm on the saddle, I feel most alive. From mountain climbs
                            to long highway miles, every ride is a story. Pedalon is my
                            way of documenting those stories.
                        </p>
                        <div className="passion-stats">
                            <div className="stat">
                                <FaTachometerAlt /> 15,000+ KMs
                            </div>
                            <div className="stat">
                                <FaMountain /> 5,359m Highest
                            </div>
                        </div>
                        <a
                            href="https://strava.com/your-profile"
                            className="social-link strava"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaStrava /> Follow on Strava
                        </a>
                    </div>

                    {/* --- Card 2: The Web Developer --- */}
                    <div className="passion-card">
                        <div className="passion-card-header">
                            <FaCode className="passion-icon" />
                            <h3>The Web Developer</h3>
                        </div>
                        <p>
                            When I'm not on the bike, I'm on the keyboard. I am a
                            professional web developer who loves building great, user-friendly
                            digital experiences (like this website, which I built with
                            React!).
                        </p>
                        <div className="passion-stats">
                            <div className="stat">React</div>
                            <div className="stat">Node.js</div>
                            <div className="stat">CSS/Tailwind</div>
                        </div>
                        <div className="social-links">
                            <a
                                href="https://github.com/your-username"
                                className="social-link github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/your-username"
                                className="social-link linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- 4. My Philosophy Section --- */}
                <div className="philosophy-section">
                    <h3>My Philosophy</h3>
                    <p>
                        I believe that cycling and coding have a lot in common. Both
                        require patience, discipline, and problem-solving. Whether it's
                        a tough climb or a tricky bug, the joy of getting through it
                        is just the same.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
