import React from "react";
import logo from "../assets/Logo Yellow.svg";
import "./Logo.css";
import { motion as Motion } from "framer-motion"; // ✅ Import Framer Motion

function Logo() {
  return (
    <a href={"/"} className="logo-wrapper">
      <Motion.img
        src={logo}
        alt="Plugin Logo"
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </a>
  );
}

export default Logo;
