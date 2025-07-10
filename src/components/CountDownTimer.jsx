// src/components/CountdownTimer.jsx
import React, { useState, useEffect, useCallback } from "react";
import "./CountdownTimer.css";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).length > 0 ? (
        <div className="countdown">
          <div className="time-box"><span>{timeLeft.days}</span>Days</div>
          <div className="time-box"><span>{timeLeft.hours}</span>Hours</div>
          <div className="time-box"><span>{timeLeft.minutes}</span>Minutes</div>
          <div className="time-box"><span>{timeLeft.seconds}</span>Seconds</div>
        </div>
      ) : (
        <p className="launched-text">🚀 Plugin is live!</p>
      )}
    </div>
  );
}

export default CountdownTimer;
