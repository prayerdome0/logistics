"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 bg-gold-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-950 sm:px-8">
        <span>This SWDL platform is for sale</span>
        <Link href="/for-sale" className="underline underline-offset-4">
          View sale terms
        </Link>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="SWDL"
            className="h-11 w-11 rounded-full border border-gold-500/40 object-cover"
          />
          <span className="leading-tight">
            <span className="block font-display text-2xl tracking-[0.18em] text-gold-400">
              {site.brand}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-cream/60">
              Logistics
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] transition ${
                  active ? "text-gold-400" : "text-cream/70 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`mailto:${site.email}`}
            className="text-xs uppercase tracking-[0.16em] text-cream/60"
          >
            {site.email}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-5 bg-cream" />
          <span className="mt-1.5 block h-px w-5 bg-cream" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-cream/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
