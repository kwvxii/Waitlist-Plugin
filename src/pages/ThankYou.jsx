// src/pages/ThankYou.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import CountdownTimer from "../components/CountDownTimer.jsx";

import Footer from "../components/Footer.jsx";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="thankyou-page">
      <Motion.div
        className="thankyou-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="thankyou-heading">🎉 You’re officially on the list!</h1>
        <p className="thankyou-sub">
          Invite friends and stay plugged in for exclusive Plugin rewards.
        </p>

        <CountdownTimer targetDate="2025-08-30T00:00:00" />

        <SocialButtons />
      </Motion.div>

      <Footer />
    </div>
  );
}

export default ThankYou;
