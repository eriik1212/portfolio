import { useState, useEffect } from "react";
import "./ExperienceCounter.css";

export default function ExperienceCounter() {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date(2025, 2, 3, 9, 0, 0);
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let tempDate = new Date(startDate);
      tempDate.setFullYear(tempDate.getFullYear() + years);

      let months = 0;
      while (
        new Date(
          tempDate.getFullYear(),
          tempDate.getMonth() + months + 1,
          tempDate.getDate(),
        ) <= now
      ) {
        months++;
      }
      tempDate.setMonth(tempDate.getMonth() + months);

      let days = 0;
      while (
        new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          tempDate.getDate() + days + 1,
        ) <= now
      ) {
        days++;
      }
      tempDate.setDate(tempDate.getDate() + days);

      let hours = now.getHours() - tempDate.getHours();
      if (hours < 0) {
        hours += 24;
        days--;
      }

      let minutes = now.getMinutes() - tempDate.getMinutes();
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }

      let seconds = now.getSeconds() - tempDate.getSeconds();
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }

      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        months--;
        const prevMonth = new Date(
          tempDate.getFullYear(),
          tempDate.getMonth(),
          0,
        );
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience({ years, months, days, hours, minutes, seconds });
    };

    calculateExperience();
    const interval = setInterval(calculateExperience, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="experience-counter">
      <div className="counter-header">
        <h3>Experience</h3>
      </div>

      <div className="counter-display">
        <div className="counter-item blur-0">
          <div className="counter-value">{experience.years}</div>
          <div className="counter-label">Years</div>
        </div>

        <div className="counter-separator">:</div>

        <div className="counter-item blur-1">
          <div className="counter-value">
            {String(experience.months).padStart(2, "0")}
          </div>
          <div className="counter-label">Months</div>
        </div>

        <div className="counter-separator">:</div>

        <div className="counter-item blur-2">
          <div className="counter-value">
            {String(experience.days).padStart(2, "0")}
          </div>
          <div className="counter-label">Days</div>
        </div>

        <div className="counter-separator">:</div>

        <div className="counter-item blur-3">
          <div className="counter-value">
            {String(experience.hours).padStart(2, "0")}
          </div>
          <div className="counter-label">Hours</div>
        </div>

        <div className="counter-separator">:</div>

        <div className="counter-item blur-4">
          <div className="counter-value">
            {String(experience.minutes).padStart(2, "0")}
          </div>
          <div className="counter-label">Minutes</div>
        </div>

        <div className="counter-separator">:</div>

        <div className="counter-item blur-5">
          <div className="counter-value">
            {String(experience.seconds).padStart(2, "0")}
          </div>
          <div className="counter-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}
