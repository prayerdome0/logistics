import { galleryStrip } from "@/lib/site";

export default function MarqueeGallery({
  caption = "Live network imagery — auto playing",
}: {
  caption?: string;
}) {
  const loop = [...galleryStrip, ...galleryStrip];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-navy-900 py-8">
      <p className="mb-5 px-4 text-center text-[11px] uppercase tracking-[0.35em] text-gold-400">
        {caption}
      </p>
      <div className="flex w-max marquee-track">
        {loop.map((item, i) => (
          <figure key={`${item.src}-${i}`} className="mx-2 w-[280px] shrink-0 sm:w-[340px]">
            <img
              src={item.src}
              alt={item.label}
              className="h-44 w-full rounded-lg object-cover ring-1 ring-white/10 sm:h-52"
            />
            <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-cream/55">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
