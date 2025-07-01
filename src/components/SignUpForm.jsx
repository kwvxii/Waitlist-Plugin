// src/components/SignupForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion as Motion } from "framer-motion"; // ✅ Import Framer Motion
import "./SignupForm.css";
import Logo from "./Logo";

function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.pluginafrica.org/api/v1/waitlist",
        { email: formData.email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Submitted:", response.data);
      navigate("/thank-you");
    } catch (error) {
      console.error("❌ Submit failed:", error.response?.data || error.message);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <Motion.div
      className="signup-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Logo />

      <Motion.p
        className="signup-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Join the waitlist for Plugin — Africa’s premier freelance marketplace
        where top talent meets opportunity, and your next project begins with
        trusted professionals ready to build.
      </Motion.p>

      <Motion.form
        className="signup-form"
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <Motion.input
          type="text"
          name="fullName"
          placeholder="👤 Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        />

        <Motion.input
          type="email"
          name="email"
          placeholder="✉️ Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        />

        <Motion.label
          className="checkbox-container"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I agree to receive updates from Plugin.
        </Motion.label>

        <Motion.button
          type="submit"
          className="submit-btn"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Join the Waitlist →
        </Motion.button>
      </Motion.form>
    </Motion.div>
  );
}

export default SignupForm;
