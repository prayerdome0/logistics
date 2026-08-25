import type { Metadata } from "next";
import MarqueeGallery from "@/components/MarqueeGallery";
import { services, unsplash } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

const extras = [
  {
    title: "Project cargo",
    image: unsplash.crane,
    copy: "Heavy-lift surveys, route studies and out-of-gauge moves for plant and energy.",
  },
  {
    title: "E-commerce fulfilment",
    image: unsplash.boxes,
    copy: "Same-day pick and pack, returns, and branded last-mile for digital merchants.",
  },
  {
    title: "Cold chain",
    image: "/images/warehouse.jpg",
    copy: "Reefer ocean, pharma air and temperature-logged road with excursion alerts.",
  },
  {
    title: "Reverse logistics",
    image: unsplash.pallet,
    copy: "Returns, refurbishment staging and certified destruction where required.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/hero-port.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-6xl">
            Freight, storage and compliance under one SWDL number.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-8">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? "lg:[&>img]:order-2" : ""}`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-80 w-full rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                0{i + 1}
              </p>
              <h2 className="mt-2 font-display text-4xl">{s.title}</h2>
              <p className="mt-4 text-cream/70">{s.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-cream/60">
                <li>— Nominated carriers and backup routings</li>
                <li>— Live milestones in the SWDL tracker</li>
                <li>— Exception desk that owns the recovery</li>
              </ul>
            </div>
          </article>
        ))}
      </section>

      <MarqueeGallery caption="Service photography — auto playing" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <h2 className="font-display text-4xl">Adjacent programmes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {extras.map((e) => (
            <article key={e.title} className="overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/10">
              <img src={e.image} alt={e.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-2xl">{e.title}</h3>
                <p className="mt-2 text-sm text-cream/65">{e.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
