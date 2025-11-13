
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | {} => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-gray-800/70 p-4 rounded-lg min-w-[80px] md:min-w-[100px] border border-gray-700 backdrop-blur-sm">
        <span className="text-3xl md:text-4xl font-bold text-cyan-400">{String(value).padStart(2, '0')}</span>
        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
);

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate) as TimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate) as TimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
      if(isNaN(value)) return null;
      return <TimeBox key={interval} value={value} label={interval} />
  });

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {timerComponents.length ? timerComponents : <span>Promo has ended!</span>}
    </div>
  );
};
