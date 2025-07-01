import React from "react";
import { motion as Motion } from "framer-motion";
import "./Loader.css";
import logo from "../assets/Logo Yellow.svg";

const Loader = () => {
  return (
    <Motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Motion.img
        src={logo}
        alt="Logo"
        className="loader-logo"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </Motion.div>
  );
};

export default Loader;
