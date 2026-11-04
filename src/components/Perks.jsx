import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { perks } from "../data/chalets";

export default function Perks() {
  const root = useRef(null);

  useGSAP(
    () => {
      // The three items rise one after the other while you scroll
      gsap.from(".perk", {
        y: 60,
        opacity: 0,
        stagger: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 80%", end: "center 55%", scrub: true },
      });
      // The gold line grows across the section
      gsap.from(".perk-line", {
        scaleX: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 75%", end: "center 55%", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-palm text-sand">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <div className="perk-line h-px bg-sun origin-right" />
        <div className="grid gap-10 sm:grid-cols-3 mt-12">
          {perks.map((p, i) => (
            <div key={p.title} className="perk">
              <p className="text-sun text-sm tracking-[0.3em]" dir="ltr">0{i + 1}</p>
              <h3 className="text-2xl font-semibold mt-3">{p.title}</h3>
              <p className="text-sand/70 mt-2 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
