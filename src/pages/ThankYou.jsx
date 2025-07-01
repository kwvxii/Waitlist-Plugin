// src/pages/ThankYou.jsx
import React, { useEffect, useState } from "react";
import "./ThankYou.css";

function ThankYou() {
  const [timeLeft, setTimeLeft] = useState(10); // 10 second countdown

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="thankyou-container">
      <h1>🎉 You’re on the Waitlist!</h1>
      <p>Thank you for signing up. Help us spread the word.</p>

      <div className="countdown">
        {timeLeft > 0 ? `⏳ ${timeLeft} seconds left...` : "🔥 You're all set!"}
      </div>

      <div className="share-buttons">
        <a
          href={`https://wa.me/?text=Plugin is launching soon. Be among the first to know!`}
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Share on WhatsApp
        </a>

        <a
          href="https://www.instagram.com/pluginafrica"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Share to Instagram
        </a>

        <button onClick={() => alert("Thanks for sharing!")}>
          🔗 Copy Plugin Website
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
