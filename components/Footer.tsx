import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl tracking-[0.2em] text-gold-400">{site.brand}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/65">
            {site.legal} operates SWDL as an integrated freight, warehousing and
            last-mile platform. The brand, website and operating playbooks are
            offered for sale.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-gold-400">Navigate</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/70 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-gold-400">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Email: {site.email}</li>
            <li>Contact: {site.phone}</li>
            <li>Address: {site.address}</li>
          </ul>
        </div>
      </div>
      <div className="gold-rule" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
        <p>SWDL is a trade name of {site.legal}. This website is for sale.</p>
      </div>
    </footer>
  );
}
