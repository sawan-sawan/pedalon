import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// --- आपके सभी पेज सेक्शन्स ---
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Trifecta from "./components/Trifecta.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FeaturedRides from "./components/FeaturedRides.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import Footer from "./components/Footer.jsx";

// --- आपके नए पेज (जिन्हें हम components फोल्डर में मान रहे हैं) ---
// FIX: आपके स्क्रीनशॉट के अनुसार पाथ को ./pages/ से अपडेट किया गया
import PastRides from "./pages/PastRides.jsx";
import PresentRides from "./pages/PresentRides.jsx";
import FutureRides from "./pages/FutureRides.jsx";
import AboutPage from "./pages/AboutPage.jsx"; // यह डिटेल्ड About Me पेज है
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* --- 1. होमपेज रूट --- */}
        {/* यह आपके 5 होमपेज सेक्शन्स को दिखाता है */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Trifecta />
              <AboutSection />
              <FeaturedRides />
              <GetInTouch />
            </>
          }
        />

        {/* --- 2. बाकी सभी पेज --- */}
        <Route path="/past-rides" element={<PastRides />} />
        <Route path="/present-rides" element={<PresentRides />} />
        <Route path="/future-rides" element={<FutureRides />} />
        <Route path="/about" element={<AboutPage />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;