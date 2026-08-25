import type { Metadata } from "next";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import MarqueeGallery from "@/components/MarqueeGallery";
import { galleryStrip, site } from "@/lib/site";

export const metadata: Metadata = { title: "For Sale" };

export default function ForSalePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/hero-port.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Acquisition</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-6xl">
            SWDL is for sale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/75">
            Offered by {site.legal}. Price {site.salePrice}.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2">
        <div className="space-y-5 text-cream/75">
          <p>
            This multi-page logistics website, the SWDL public brand system, and
            the accompanying imagery library are copyrighted by {site.legal} and
            listed as a complete digital asset.
          </p>
          <ul className="space-y-3 text-sm">
            <li>— Seven-page Next.js site ready for Vercel</li>
            <li>— Auto-playing hero, fleet and network galleries</li>
            <li>— Service architecture: ocean, air, road, rail, warehouse, customs</li>
            <li>— Tracking demo, quote form and sale memorandum page</li>
            <li>— Transfer of the public presentation as agreed in writing</li>
          </ul>
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            <div className="rounded-xl bg-navy-900 p-4 ring-1 ring-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">Email</p>
              <p className="mt-1">{site.email}</p>
            </div>
            <div className="rounded-xl bg-navy-900 p-4 ring-1 ring-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">Contact</p>
              <p className="mt-1">{site.phone}</p>
            </div>
            <div className="rounded-xl bg-navy-900 p-4 ring-1 ring-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">Address</p>
              <p className="mt-1">{site.address}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950"
          >
            Open negotiations
          </Link>
        </div>
        <AutoCarousel items={galleryStrip} interval={2400} className="h-[500px] rounded-2xl ring-1 ring-white/10" />
      </section>

      <MarqueeGallery caption="Asset photography included — auto playing" />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-8">
        <p className="text-sm leading-relaxed text-cream/55">
          © {new Date().getFullYear()} {site.legal}. All rights reserved. SWDL is
          a trade name of {site.legal}. Nothing on this page constitutes an offer
          to transfer regulated licences; operating permits remain subject to
          applicable law and buyer due diligence.
        </p>
      </section>
    </>
  );
}
