import type { Metadata } from "next";
import AutoCarousel from "@/components/AutoCarousel";
import MarqueeGallery from "@/components/MarqueeGallery";
import { unsplash } from "@/lib/site";

export const metadata: Metadata = { title: "Fleet" };

const fleetSlides = [
  { src: "/images/hero-fleet.jpg", label: "Linehaul tractors" },
  { src: "/images/lastmile.jpg", label: "City vans" },
  { src: unsplash.highway, label: "Night linehaul" },
  { src: unsplash.nightTruck, label: "Long haul" },
  { src: unsplash.cityVan, label: "Urban fleet" },
  { src: unsplash.cargoHold, label: "Trailer pool" },
];

const assets = [
  { n: "86", l: "powered units" },
  { n: "140", l: "trailers & reefers" },
  { n: "64", l: "last-mile vans" },
  { n: "9", l: "yard shunters" },
];

export default function FleetPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/hero-fleet.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Fleet & network</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-6xl">
            Navy cabs. Gold letters. Timed doors.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">A mixed fleet that stays on the clock.</h2>
          <p className="mt-5 text-cream/70">
            SWDL runs linehaul tractors, a reefer and dry trailer pool, and a
            last-mile van set liveried for city work. Partner tonnage covers
            overflow without breaking the tracking number.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {assets.map((a) => (
              <div key={a.l} className="rounded-xl bg-navy-900 p-5 ring-1 ring-white/10">
                <p className="font-display text-3xl text-gold-400">{a.n}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/55">{a.l}</p>
              </div>
            ))}
          </div>
        </div>
        <AutoCarousel items={fleetSlides} interval={2800} className="h-[480px] rounded-2xl ring-1 ring-white/10" />
      </section>

      <MarqueeGallery caption="Fleet filmstrip — auto playing" />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-8 md:grid-cols-3">
        {[
          {
            t: "Road",
            img: "/images/hero-fleet.jpg",
            d: "FTL, LTL and timed windows with digital POD and geo-fenced arrivals.",
          },
          {
            t: "Intermodal",
            img: "/images/rail.jpg",
            d: "Rail ramps and port transfers that keep boxes off congested highways.",
          },
          {
            t: "Air & ocean feeders",
            img: "/images/hero-air.jpg",
            d: "Airport and quay collection that locks to the booked flight or berth.",
          },
        ].map((c) => (
          <article key={c.t} className="overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/10">
            <img src={c.img} alt={c.t} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-display text-2xl">{c.t}</h3>
              <p className="mt-2 text-sm text-cream/65">{c.d}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
