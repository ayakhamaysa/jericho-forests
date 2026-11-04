import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { place } from "../data/chalets";

export default function Booking() {
  const root = useRef(null);

  useGSAP(
    () => {
      // The circle grows from small to full size as the section scrolls in
      gsap.from(".grow-circle", {
        scale: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "center center", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-night text-sand overflow-hidden">
      <div className="grow-circle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full bg-dusk" />
      <div className="relative max-w-3xl mx-auto px-5 py-32 text-center">
        <h2 className="font-display text-5xl md:text-7xl">احجز فيلّتك</h2>
        <p className="mt-6 text-sand/75 text-lg">الأسعار والتفاصيل على واتساب. احكيلنا التاريخ وعدد الأشخاص، ومنرد عليك بالأيام المتاحة.</p>
        <p className="mt-3 text-sun text-xl" dir="ltr">{place.phone}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {place.whatsapp && (
            <a href={`https://wa.me/${place.whatsapp}`} target="_blank" className="bg-sun text-night font-semibold px-8 py-3.5 rounded-full hover:bg-sand transition-colors">
              احجز على واتساب
            </a>
          )}
          {[
            ["إنستغرام", place.instagram],
            ["فيسبوك", place.facebook],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" className="border border-sand/30 px-6 py-3.5 rounded-full hover:border-sun transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
      <p className="relative border-t border-sand/10 py-5 text-center text-xs text-sand/60">
        تصميم وتطوير{" "}
        <a href="https://www.instagram.com/oneclick.ps" target="_blank" className="font-semibold text-sun">One Click</a>
      </p>
    </section>
  );
}
