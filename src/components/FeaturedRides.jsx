import React from "react";
import "./FeaturedRides.css";

// सैंपल डेटा, आप इसे बाद में CMS या API से ला सकते हैं
const rides = [
  {
    id: 1,
    tag: "PAST RIDE",
    title: "Conquering Khardung La",
    excerpt: "The air was thin, the climb was brutal, but the view from the top was worth every pedal stroke.",
    imageUrl: "/img/img7.jpg", // <-- अपनी राइड की तस्वीर
    link: "/blog/khardung-la"
  },
  {
    id: 2,
    tag: "TRAINING LOG",
    title: "Coastal Roads of Goa",
    excerpt: "A 200km training ride along the beautiful and humid coastlines of Goa. Here's how it went.",
    imageUrl: "/img/img8.jpg", // <-- अपनी राइड की तस्वीर
    link: "/blog/goa-ride"
  },
  {
    id: 3,
    tag: "GEAR REVIEW",
    title: "My Triban RC 100 Review",
    excerpt: "After 10,000 KMs on this bike, I can finally share my thoughts on this reliable workhorse.",
    imageUrl: "/img/img4.jpg", // <-- अपनी बाइक/गियर की तस्वीर
    link: "/blog/triban-review"
  }
];

const FeaturedRides = () => {
  return (
    <section className="rides-section">
      
      {/* Flow: Same section header style */}
      <div className="section-header">
        <h3 className="section-subtitle">STORIES FROM THE ROAD</h3>
        <h2 className="section-title">My Latest Rides & Logs</h2>
      </div>

      {/* --- Rides Grid --- */}
      <div className="rides-container">
        {rides.map((ride) => (
          <div className="ride-card" key={ride.id}>
            
            {/* Image Wrapper (for hover zoom) */}
            <div className="ride-card-image-wrapper">
              <img src={ride.imageUrl} alt={ride.title} className="ride-card-image" />
            </div>

            {/* Content Wrapper */}
            <div className="ride-card-content">
              <span className="ride-card-tag">{ride.tag}</span>
              <h3 className="ride-card-title">{ride.title}</h3>
              <p className="ride-card-excerpt">
                {ride.excerpt}
              </p>
              <a href={ride.link} className="btn-ride">
                Read The Story
              </a>
            </div>

          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <a href="/blog" className="btn-view-all">
          View All Stories
        </a>
      </div>
    </section>
  );
};

export default FeaturedRides;