import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { chalets, place } from "../data/chalets";

export default function Chalets() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      // How far the row must move so the last card comes into view
      const distance = () => track.current.scrollWidth - window.innerWidth;

      // Scrolling down moves the row sideways (right to left reading)
      gsap.to(track.current, {
        x: () => distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section id="chalets" ref={root} className="h-svh bg-sand overflow-hidden flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-5">
        <p className="text-clay font-semibold">فللنا</p>
        <h2 className="font-display text-4xl md:text-6xl mt-1">اختار فيلّتك</h2>
      </div>

      <div ref={track} className="flex gap-5 px-5 md:px-[8vw] mt-6 md:mt-8 w-max">
        {chalets.map((c) => (
          <article key={c.name} className="w-[82vw] sm:w-[52vw] lg:w-[34vw] shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-sm">
            <img src={c.image} alt={c.name} className="w-full h-[27vh] min-h-40 object-cover" />

            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-[0.15em]" dir="ltr">{c.name}</h3>
                <p className="whitespace-nowrap">
                  <span className="text-2xl font-semibold text-clay">{c.price}</span> {place.currency}
                  <span className="text-sm text-ink/50"> / الليلة</span>
                </p>
              </div>

              <p className="text-ink/60 text-sm mt-1">{c.rooms} غرف نوم · {c.baths} حمامات</p>

              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-4 text-xs text-ink/80">
                {c.features.map((f) => (
                  <li key={f} className="flex gap-1.5 items-start">
                    <span className="text-sun">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
