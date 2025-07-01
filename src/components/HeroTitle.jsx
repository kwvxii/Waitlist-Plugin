import React from "react";
import { motion as Motion } from "framer-motion";
import "./HeroTitle.css";

const HeroTitle = () => {
  return (
    <h1 className="hero-title" aria-label="Access the Future. One Plug at a Time.">
      <span className="split-word-wrap">
        <Motion.div
          className="split-word"
          aria-hidden="true"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          Access the
          <span className="highlight-bar" />
        </Motion.div>
      </span>

      <span className="split-word-wrap">
        <Motion.div
          className="split-word"
          aria-hidden="true"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Future.
        </Motion.div>
      </span>
      <br />
      <span className="split-word-wrap">
        <Motion.div
          className="split-word"
          aria-hidden="true"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          One
        </Motion.div>
      </span>

      <span className="split-word-wrap">
        <Motion.div
          className="split-word"
          aria-hidden="true"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="highlight"><strong>PLUG</strong></span>
        </Motion.div>
      </span>

        <span className="split-word-wrap">
          <Motion.div
            className="split-word"
            aria-hidden="true"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            at a Time.
          </Motion.div>
        </span>
    </h1>
  );
};

export default HeroTitle;
