import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

// Your slidesData array (no changes here)
const slidesData = [
  {
    img: "/img/img1.jpg",
    subtitle: "ECHOES OF THE PAST",
    title: "Conquering the Mountains",
    description:
      "One of my most memorable rides, where every turn was a new challenge.",
  },
  {
    img: "/img/img2.jpg",
    subtitle: "THE JOURNEY TODAY (PRESENT)",
    title: "Live on the Road",
    description:
      "Training in progress. Every day, every pedal makes me stronger for what's next.",
  },
  {
    img: "/img/img3.jpg",
    subtitle: "THE NEXT HORIZON (FUTURE)",
    title: "Challenge: The Leh-Manali Epic",
    description:
      "The dream ride is about to begin. Preparations are at their peak.",
  },
  {
    img: "/img/img4.jpg",
    subtitle: "MY PASSION",
    title: "Just One Pedal Away",
    description: "For me, cycling isn't just a sport; it's a way of life.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // --- 1. स्मूथ स्क्रॉल के लिए फंक्शन ---
  const handleSmoothScroll = (e) => {
    e.preventDefault(); // 1. तुरंत 'jump' को रोकें
    const targetId = e.currentTarget.getAttribute("href").substring(1); // 'href' से '#trifecta' को निकालें
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 2. स्मूथ स्क्रॉलिंग शुरू करें
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const currentSlide = slidesData[currentIndex];
  useScrollToTop();

  return (
    <section className="hero-section">
      {/* Background slider (no change) */}
      <div className="slider-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          ></div>
        ))}
      </div>

      {/* Overlay (no change) */}
      <div className="hero-overlay"></div>

      {/* --- MODIFICATION HERE --- */}

      {/* 1. 'key' is REMOVED from this div. 
           This div will now run 'fadeInUp' animation only ONCE on page load. */}
      <div className="hero-content">
        {/* 2. We add a NEW wrapper div HERE.
               We put the 'key={currentIndex}' on it.
               This wrapper will re-animate using the new 'simpleFade' animation. */}
        <div className="hero-text-wrapper" key={currentIndex}>
          <h3 className="hero-subtitle">{currentSlide.subtitle}</h3>
          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-description">{currentSlide.description}</p>
        </div>

        {/* The button is outside the changing text, so no changes needed */}
        <div className="hero-cta">
          {/* --- 3. onClick हैंडलर यहाँ जोड़ा गया --- */}
          <a
            href="#trifecta"
            className="btn btn-primary pulse"
            onClick={handleSmoothScroll} // <-- यह लाइन जोड़ी गई है
          >
            Explore the Journey
          </a>
        </div>
      </div>
      <div className="hero-pagination">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;