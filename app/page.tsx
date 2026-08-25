import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import MarqueeGallery from "@/components/MarqueeGallery";
import AutoCarousel from "@/components/AutoCarousel";
import { galleryStrip, services, site, unsplash } from "@/lib/site";

const stats = [
  { n: "48", l: "trade lanes" },
  { n: "12", l: "fulfilment nodes" },
  { n: "99.2%", l: "on-time window" },
  { n: "24/7", l: "control tower" },
];

const modes = [
  { src: "/images/hero-port.jpg", label: "Ocean" },
  { src: "/images/hero-air.jpg", label: "Air" },
  { src: "/images/hero-fleet.jpg", label: "Road" },
  { src: "/images/rail.jpg", label: "Rail" },
  { src: unsplash.dock, label: "Cross-dock" },
  { src: unsplash.plane, label: "Charter" },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">The house</p>
          <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            One contract. Every mode. A single SWDL window.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-cream/75">
          <p>
            {site.legal} built SWDL as a compact, sale-ready logistics brand:
            ocean and air programmes, a disciplined road fleet, rail corridors,
            bonded warehousing and a live control tower.
          </p>
          <p>
            The site, visual system and operating narrative are copyrighted by{" "}
            {site.legal} and listed for sale. Enquiries: {site.email} · {site.phone} ·{" "}
            {site.address}.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/about"
              className="rounded-full border border-gold-500/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold-400"
            >
              About SWDL
            </Link>
            <Link
              href="/for-sale"
              className="rounded-full bg-gold-500 px-5 py-2 text-xs uppercase tracking-[0.2em] text-navy-950"
            >
              Acquire the brand
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="border-white/10 px-6 py-10 md:border-r last:border-r-0">
            <p className="font-display text-4xl text-gold-400">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/55">{s.l}</p>
          </div>
        ))}
      </section>

      <MarqueeGallery caption="Auto-playing network filmstrip" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Capabilities</p>
            <h2 className="mt-3 font-display text-4xl">Services that travel with the cargo</h2>
          </div>
          <Link href="/services" className="hidden text-xs uppercase tracking-[0.2em] text-gold-400 sm:block">
            All services →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="group overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/10">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{s.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2">
          <AutoCarousel items={modes} className="h-[420px] rounded-2xl ring-1 ring-white/10" />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Control tower</p>
            <h2 className="mt-3 font-display text-4xl">
              Auto-playing ops imagery from every lane we run.
            </h2>
            <p className="mt-5 text-cream/70">
              The SWDL tower watches berths, tarmac slots, yard dwell and last-mile
              ETAs. Clients get a single tracking number. Buyers of the brand get
              the interface, the photography library and the service architecture.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {galleryStrip.slice(0, 4).map((g) => (
                <img
                  key={g.label}
                  src={g.src}
                  alt={g.label}
                  className="h-24 w-full rounded-lg object-cover ring-1 ring-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/control-room.jpg"
          alt="SWDL control room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">For sale</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            SWDL is listed by {site.legal}.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-cream/75">
            Price {site.salePrice}. Write to {site.email}, call {site.phone}, or
            visit {site.address}.
          </p>
          <Link
            href="/for-sale"
            className="mt-8 inline-block rounded-full bg-gold-500 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-950"
          >
            Request the memorandum
          </Link>
        </div>
      </section>
    </>
  );
}
