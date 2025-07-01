import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";

import SignupForm from "./components/SignUpForm";
import ThankYou from "./pages/ThankYou";
import Footer from "./components/Footer";
import HeroTitle from "./components/HeroTitle";
import Loader from "./components/Loader";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<><HeroTitle /><SignupForm /></>} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // simulate loading

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router basename="/Waitlist-Plugin/">
      {loading ? (
        <Motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Loader />
        </Motion.div>
      ) : (
        <Motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="app-wrapper">
            <div className="main-content">
              <AnimatedRoutes />
            </div>
            <Footer />
          </div>
        </Motion.div>
      )}
    </Router>
  );
}

export default App;
