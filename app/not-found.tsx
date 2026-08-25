import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold-400">404</p>
      <h1 className="mt-4 font-display text-5xl">This consignment is not on the board.</h1>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950"
      >
        Return to SWDL
      </Link>
    </section>
  );
}
