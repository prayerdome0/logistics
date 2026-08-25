import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src="/images/lastmile.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/78" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Contact</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Write the tower.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            ["Email", site.email, `mailto:${site.email}`],
            ["Contact", site.phone, `tel:${site.phone}`],
            ["Address", site.address, "/contact"],
            ["Legal owner", site.legal, "/about"],
          ].map(([k, v, href]) => (
            <a
              key={k}
              href={href}
              className="block rounded-2xl bg-navy-900 p-6 ring-1 ring-white/10 transition hover:ring-gold-500/50"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold-400">{k}</p>
              <p className="mt-2 font-display text-3xl">{v}</p>
            </a>
          ))}
          <p className="text-sm text-cream/55">
            © {new Date().getFullYear()} {site.legal}. SWDL is for sale.
          </p>
        </div>

        <form
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="rounded-2xl bg-navy-900 p-8 ring-1 ring-white/10"
        >
          <h2 className="font-display text-3xl">Request a quote or the sale pack</h2>
          <div className="mt-6 space-y-4">
            <label className="block text-xs uppercase tracking-[0.18em] text-cream/55">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-navy-950 px-4 py-3 text-sm text-cream outline-none focus:border-gold-500"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.18em] text-cream/55">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-navy-950 px-4 py-3 text-sm text-cream outline-none focus:border-gold-500"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.18em] text-cream/55">
              Interest
              <select
                name="interest"
                className="mt-2 w-full rounded-xl border border-white/10 bg-navy-950 px-4 py-3 text-sm text-cream outline-none focus:border-gold-500"
              >
                <option>Freight quote</option>
                <option>Acquire SWDL</option>
                <option>Partnership</option>
              </select>
            </label>
            <label className="block text-xs uppercase tracking-[0.18em] text-cream/55">
              Message
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-navy-950 px-4 py-3 text-sm text-cream outline-none focus:border-gold-500"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gold-500 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-950"
            >
              Send to {site.email}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
