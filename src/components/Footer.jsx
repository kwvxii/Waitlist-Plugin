// src/components/Footer.jsx

import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion as Motion } from "framer-motion"; // ✅ Framer Motion

function Footer() {
  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-top">
        <div className="spacer" /> {/* 👈 Pushes icons to the right */}
        <div className="social-icons">
          <a
            href="https://x.com/talk_plugin"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/infoplugin/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/talk.plugin/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">
        © {new Date().getFullYear()} Plugin. All rights reserved.
      </p>
    </Motion.footer>
  );
}

export default Footer;
