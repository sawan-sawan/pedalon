import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // <-- useNavigate add kiya
import './Navbar.css';

// --- सभी Icon कॉम्पोनेंट्स (इनमें कोई बदलाव नहीं) ---
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);
const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);
const HomeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);
const MapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>
        <line x1="8" y1="2" x2="8" y2="18"></line>
        <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
);
const UserIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);
const ContactIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22 6 -12 13 2 6"></polyline>
    </svg>
);
// --- (आइकन का कोड समाप्त) ---
// (Baaki icons aur sab kuch same rahega...)

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate(); // <-- Add kiya

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    const handleContactScroll = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('contact');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMobileContactScroll = (e) => {
        handleContactScroll(e);
        handleMobileLinkClick();
    };

    // --- ⭐ NEW FUNCTION: Blog/Stories scroll to FeaturedRides ---
    const handleBlogScroll = (e) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // Agar home page par nahi ho to pehle navigate karo
            navigate('/');
            // Navigation hone ke baad thoda delay dekar scroll karo
            setTimeout(() => {
                const target = document.getElementById('FeaturedRides');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }, 600);
        } else {
            // Agar home page par ho to direct scroll karo
            const target = document.getElementById('FeaturedRides');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMobileBlogScroll = (e) => {
        handleBlogScroll(e);
        handleMobileLinkClick();
    };
    // --- ⭐ END ---

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    const navLinks = [
        { name: "Home", href: "/", icon: <HomeIcon className="mobile-nav-icon" /> },
        {
            name: "The Journey",
            href: "#",
            icon: <MapIcon className="mobile-nav-icon" />,
            dropdown: [
                { name: "Past Rides", href: "/past-rides" },
                { name: "Live Tracking (Present)", href: "/present-rides" },
                { name: "Future Plans", href: "/future-rides" },
            ]
        },
        {
            name: "About Me",
            href: "/about",
            icon: <UserIcon className="mobile-nav-icon" />,
        },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">Pedalon</Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-desktop" ref={navRef}>
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div className="nav-item-dropdown" key={link.name}>
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="nav-link dropdown-toggle"
                                    >
                                        {link.name}
                                        <ChevronDownIcon className={`icon icon-chevron ${openDropdown === link.name ? 'open' : ''}`} />
                                    </button>
                                    <div className={`dropdown-menu ${openDropdown === link.name ? 'open' : ''}`}>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="dropdown-item"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link key={link.name} to={link.href} className="nav-link">
                                    {link.name}
                                </Link>
                            )
                        )}

                        {location.pathname === '/' ? (
                            <a href="#contact" onClick={handleContactScroll} className="nav-link">
                                Contact
                            </a>
                        ) : (
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        )}

                        {/* ⭐ Blog/Stories Button Scroll Functionality */}
                        <a href="#FeaturedRides" className="btn btn-primary" onClick={handleBlogScroll}>
                            Blog / Stories
                        </a>
                    </div>

                    <div className="navbar-mobile-toggle">
                        <button onClick={toggleMobileMenu} className="menu-toggle-btn">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
            ></div>

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" className="navbar-logo2" onClick={handleMobileLinkClick}>Pedalon</Link>
                    <button onClick={toggleMobileMenu} className="menu-toggle-btn">
                        <CloseIcon />
                    </button>
                </div>

                <div className="mobile-menu-body">
                    <nav className="mobile-menu-nav">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.name} className="nav-item-dropdown-mobile">
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="dropdown-toggle-mobile"
                                    >
                                        <span className="mobile-link-content">
                                            {link.icon}
                                            <span>{link.name}</span>
                                        </span>
                                        <ChevronDownIcon className={`icon icon-chevron ${openDropdown === link.name ? 'open' : ''}`} />
                                    </button>
                                    <div className={`dropdown-menu-mobile ${openDropdown === link.name ? 'open' : ''}`}>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="dropdown-item-mobile"
                                                onClick={handleMobileLinkClick}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="nav-link-mobile"
                                    onClick={handleMobileLinkClick}
                                >
                                    <span className="mobile-link-content">
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </span>
                                </Link>
                            )
                        )}

                        {location.pathname === '/' ? (
                            <a href="#contact" className="nav-link-mobile" onClick={handleMobileContactScroll}>
                                <span className="mobile-link-content">
                                    <ContactIcon className="mobile-nav-icon" />
                                    <span>Contact</span>
                                </span>
                            </a>
                        ) : (
                            <Link to="/contact" className="nav-link-mobile" onClick={handleMobileLinkClick}>
                                <span className="mobile-link-content">
                                    <ContactIcon className="mobile-nav-icon" />
                                    <span>Contact</span>
                                </span>
                            </Link>
                        )}
                    </nav>

                    <div className="mobile-menu-footer">
                        {/* ⭐ Mobile Blog Scroll Button */}
                        <a
                            href="#FeaturedRides"
                            className="btn btn-primary btn-mobile"
                            onClick={handleMobileBlogScroll}
                        >
                            Blog / Stories
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
