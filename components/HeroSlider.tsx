"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[620px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.kicker}
            className={`h-full w-full object-cover ${i === index ? "kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/20" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 sm:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-400">
          {heroSlides[index].kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-cream sm:text-6xl">
          {heroSlides[index].title}
        </h1>
        <p className="mt-5 max-w-xl text-base text-cream/75 sm:text-lg">
          {heroSlides[index].copy}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950"
          >
            Explore services
          </Link>
          <Link
            href="/tracking"
            className="rounded-full border border-cream/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream"
          >
            Track a shipment
          </Link>
        </div>

        <div className="mt-10 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.kicker}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-12 bg-gold-400" : "w-6 bg-cream/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
