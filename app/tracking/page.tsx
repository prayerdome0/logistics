"use client";

import { FormEvent, useMemo, useState } from "react";
import AutoCarousel from "@/components/AutoCarousel";

const demo = {
  id: "SWDL-88421",
  status: "In transit — last mile",
  origin: "Tema Port",
  dest: "Address abc",
  eta: "Today, 16:40",
  steps: [
    { t: "Booking confirmed", d: "Export desk", done: true },
    { t: "Ocean departure", d: "Vessel on berth", done: true },
    { t: "Customs released", d: "Brokerage complete", done: true },
    { t: "Linehaul to city hub", d: "Tractor 14", done: true },
    { t: "Out for delivery", d: "Van SW-09", done: false },
    { t: "Proof of delivery", d: "Consignee sign", done: false },
  ],
};

const tower = [
  { src: "/images/control-room.jpg", label: "Tower live" },
  { src: "/images/hero-fleet.jpg", label: "Road ping" },
  { src: "/images/lastmile.jpg", label: "Last mile" },
  { src: "/images/customs.jpg", label: "Release" },
];

export default function TrackingPage() {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  const [error, setError] = useState("");

  const normalized = useMemo(() => query.trim().toUpperCase(), [query]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!normalized) {
      setError("Enter a consignment number.");
      setFound(false);
      return;
    }
    setError("");
    setFound(true);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/control-room.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Tracking</p>
          <h1 className="mt-4 font-display text-5xl">Follow the box.</h1>
          <p className="mt-4 text-cream/70">
            Try any reference — the demo returns consignment {demo.id}.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. SWDL-88421"
              className="flex-1 rounded-full border border-white/15 bg-navy-900 px-5 py-3 text-sm outline-none ring-gold-500 focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950"
            >
              Track
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-gold-300">{error}</p>}
        </div>
      </section>

      {found && (
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl bg-navy-900 p-8 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400">{demo.id}</p>
            <h2 className="mt-2 font-display text-3xl">{demo.status}</h2>
            <p className="mt-2 text-sm text-cream/65">
              {demo.origin} → {demo.dest} · ETA {demo.eta}
            </p>
            <ol className="mt-8 space-y-4">
              {demo.steps.map((s) => (
                <li key={s.t} className="flex items-start gap-4">
                  <span
                    className={`mt-1 h-3 w-3 rounded-full ${
                      s.done ? "bg-gold-400" : "bg-white/20"
                    }`}
                  />
                  <div>
                    <p className="text-sm">{s.t}</p>
                    <p className="text-xs text-cream/50">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <AutoCarousel items={tower} interval={2600} className="h-[420px] rounded-2xl ring-1 ring-white/10 lg:col-span-2" />
        </section>
      )}
    </>
  );
}
