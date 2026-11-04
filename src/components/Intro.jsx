import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { place } from "../data/chalets";

export default function Intro() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Each word goes from faint to clear as you scroll through the paragraph
      gsap.to(".word", {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end: "bottom 45%",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-night text-sand">
      <p className="max-w-4xl mx-auto px-5 py-32 text-3xl md:text-5xl leading-relaxed font-light">
        {place.intro.split(" ").map((w, i) => (
          <span key={i} className="word opacity-15">{w} </span>
        ))}
      </p>
    </section>
  );
}
