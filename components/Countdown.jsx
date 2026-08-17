import { useEffect, useState } from "react";

const target = new Date("2026-11-21T09:00:00");

function getRemaining() {
  const diff = Math.max(0, target.getTime() - Date.now());
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining());
  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="countdown">
      {Object.entries(time).map(([label, value]) => (
        <div className="time-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}
