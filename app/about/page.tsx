import type { Metadata } from "next";
import AutoCarousel from "@/components/AutoCarousel";
import MarqueeGallery from "@/components/MarqueeGallery";
import { site, unsplash } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const aboutSlides = [
  { src: "/images/team.jpg", label: "Leadership" },
  { src: "/images/control-room.jpg", label: "Tower" },
  { src: "/images/warehouse.jpg", label: "Nodes" },
  { src: unsplash.workers, label: "Yard teams" },
  { src: unsplash.map, label: "Trade map" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/team.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">About the house</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-6xl">
            Seedwel Investment Limited. Trading as SWDL.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/75">
            A compact logistics operator with a complete public brand — built to
            run, and built to transfer.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2">
        <div className="space-y-5 text-cream/75">
          <p>
            SWDL is the logistics trade name of {site.legal}. We move freight
            across ocean, air, road and rail, then hold, pick and last-mile it
            through owned and partnered nodes.
          </p>
          <p>
            The company is deliberately small at the centre: a control tower, a
            compliance desk, and a nominated carrier book. Scale sits in the
            lanes, not in unused offices.
          </p>
          <p>
            Copyright in this website, the SWDL mark as presented here, and the
            accompanying photography direction is held by {site.legal}. The
            platform is for sale.
          </p>
          <dl className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {[
              ["Email", site.email],
              ["Contact", site.phone],
              ["Address", site.address],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-navy-900 p-4 ring-1 ring-white/10">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-gold-400">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <AutoCarousel items={aboutSlides} className="h-[460px] rounded-2xl ring-1 ring-white/10" />
      </section>

      <MarqueeGallery caption="House imagery — auto playing" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Mission",
              d: "Give shippers one accountable window from origin factory to consignee door.",
            },
            {
              t: "Method",
              d: "Nominated carriers, bonded yards, WMS inventory and a 24/7 tower that owns exceptions.",
            },
            {
              t: "Transfer",
              d: "The brand, site and playbooks are packaged so a buyer can continue trading as SWDL.",
            },
          ].map((c) => (
            <article key={c.t} className="rounded-2xl bg-navy-900 p-8 ring-1 ring-white/10">
              <h2 className="font-display text-3xl text-gold-400">{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{c.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
