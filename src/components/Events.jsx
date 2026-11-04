import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { events, place } from "../data/chalets";

export default function Events() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Each photo opens from the middle like a curtain while you scroll,
      // and the picture inside moves a little slower (parallax)
      gsap.utils.toArray(".event-photo").forEach((photo) => {
        gsap.fromTo(
          photo,
          { clipPath: "inset(0% 50% 0% 50% round 2rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            ease: "none",
            scrollTrigger: { trigger: photo, start: "top 90%", end: "top 45%", scrub: true },
          }
        );
        gsap.fromTo(
          photo.querySelector("img"),
          { yPercent: -8, scale: 1.15 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: photo, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    },
    { scope: root }
  );

  // WhatsApp opens with a ready message
  const message = encodeURIComponent("مرحبا، بدي أستفسر عن حجز فيلا لمناسبة");

  return (
    <section ref={root} className="bg-sand">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-clay font-semibold">الحفلات والمناسبات</p>
          <h2 className="font-display text-5xl md:text-6xl mt-1">{events.title}</h2>
          <p className="text-ink/70 mt-4 text-lg leading-relaxed">{events.text}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {events.types.map((t) => (
              <span key={t} className="bg-white border border-sun/30 text-clay text-sm px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mt-12">
          {events.photos.map((p, i) => (
            <figure key={p.image} className={`event-photo relative overflow-hidden rounded-[2rem] ${i === 1 ? "md:mt-16" : ""}`}>
              <img src={p.image} alt={p.label} className="w-full aspect-[4/5] object-cover" />
              <figcaption className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-ink text-sm font-semibold px-4 py-1.5 rounded-full">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${place.whatsapp}?text=${message}`}
            target="_blank"
            className="inline-block bg-palm text-sand font-semibold px-8 py-3.5 rounded-full hover:bg-clay transition-colors"
          >
            احجز مناسبتك على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
