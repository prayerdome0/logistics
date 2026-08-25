"use client";

import { useEffect, useState } from "react";

type Item = { src: string; label: string };

export default function AutoCarousel({
  items,
  interval = 3400,
  className = "",
}: {
  items: Item[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  const item = items[index];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {items.map((slide, i) => (
        <img
          key={slide.src + i}
          src={slide.src}
          alt={slide.label}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100 kenburns" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <p className="text-sm uppercase tracking-[0.22em] text-cream">{item.label}</p>
        <p className="text-xs text-gold-400">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
