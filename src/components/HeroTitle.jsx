import React from "react";
import { motion as Motion } from "framer-motion";
import "./HeroTitle.css";

// Regular pulse
const pulseVariants = {
  animate: (i) => ({
    scale: [1, 1.1, 1],
    textShadow: [
      "0 0 0px rgba(228, 164, 37, 0)",
      "0 0 8px rgba(228, 164, 37, 0.8)",
      "0 0 0px rgba(228, 164, 37, 0)",
    ],
    color: ["#F7F4F3", "#E4A425", "#F7F4F3"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeInOut",
    },
  }),
};

// Stronger glow for PLUG
const plugVariants = {
  animate: {
    scale: [1, 1.12, 1],
    textShadow: [
      "0 0 0px rgba(255, 215, 0, 0)",
      "0 0 20px rgba(255, 215, 0, 1)",
      "0 0 0px rgba(255, 215, 0, 0)",
    ],
    color: ["#F7F4F3", "#FFD700", "#F7F4F3"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.6,
    },
  },
};

const HeroTitle = () => {
  const firstLine = ["Access the", "Future."];
  const secondLine = ["One", "PLUG", "at a Time."];

  return (
    <h1 className="hero-title" aria-label="Access the Future. One Plug at a Time.">
      <div className="hero-line">
        {firstLine.map((word, i) => (
          <span className="split-word-wrap" key={i}>
            <Motion.div
              className="split-word"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
            >
              <Motion.span
                custom={i}
                variants={pulseVariants}
                animate="animate"
              >
                {word}
              </Motion.span>
              {i === 0 && <span className="highlight-bar" />}
            </Motion.div>
          </span>
        ))}
      </div>

      <div className="hero-line">
        {secondLine.map((word, i) => (
          <span className="split-word-wrap" key={i}>
            <Motion.div
              className={`split-word ${word === "PLUG" ? "plug-word" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.6, duration: 0.6 }}
            >
              <Motion.span
                custom={i}
                variants={word === "PLUG" ? plugVariants : pulseVariants}
                animate="animate"
              >
                {word}
              </Motion.span>
            </Motion.div>
          </span>
        ))}
      </div>
    </h1>
  );
};

export default HeroTitle;
