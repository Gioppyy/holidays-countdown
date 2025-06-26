"use client";

import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500"] });

type CountdownProps = {
    name: string;
    date: Date;
};

export default function Countdown({ name, date }: CountdownProps) {
  const [diff, setDiff] = useState(() => date.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(date.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const total = Math.max(diff, 0) / 1000;
  const days = Math.floor(total / (60 * 60 * 24));
  const hours = Math.floor((total % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((total % (60 * 60)) / 60);
  const seconds = Math.floor(total % 60);

  return (
    <div className={`${orbitron.className} text-center`}>
      <div className="border-2 py-3 text-space-2">
        <span className="text-blue-600">
          {String(days).padStart(2, "0")}:
          {String(hours).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </span>
        <div className="text-3xl py-1">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}
