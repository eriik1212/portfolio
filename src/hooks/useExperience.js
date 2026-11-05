import { useEffect, useState } from "react";

// First day as a software developer.
export const CAREER_START = new Date(2025, 2, 3, 9, 0, 0);

const addMonths = (date, months) => {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d;
};

export function getExperience(start = CAREER_START, now = new Date()) {
  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (addMonths(start, totalMonths) > now) totalMonths--;
  totalMonths = Math.max(0, totalMonths);

  const anchor = addMonths(start, totalMonths);
  let rest = Math.max(0, Math.floor((now - anchor) / 1000));
  const days = Math.floor(rest / 86400);
  rest -= days * 86400;
  const hours = Math.floor(rest / 3600);
  rest -= hours * 3600;
  const minutes = Math.floor(rest / 60);
  const seconds = rest - minutes * 60;

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    days,
    hours,
    minutes,
    seconds,
  };
}

/** Live-updating time since CAREER_START, ticking every second. */
export default function useExperience() {
  const [experience, setExperience] = useState(() => getExperience());

  useEffect(() => {
    const id = setInterval(() => setExperience(getExperience()), 1000);
    return () => clearInterval(id);
  }, []);

  return experience;
}
