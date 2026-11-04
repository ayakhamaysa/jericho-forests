import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";
import { place } from "../data/chalets";
import Palm from "./Palm";

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // One timeline, controlled by the scroll.
      // pin: the section stays on screen while the sunset plays.
      // scrub: the animation follows the scroll, forward and back.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(".sunset-sky", { opacity: 1 }, 0)
        .to(".night-sky", { opacity: 1 }, 0.5)
        .to(".sun", { yPercent: 280, scale: 1.15 }, 0)
        .to(".palm-near", { yPercent: 12 }, 0)
        .to(".palm-far", { yPercent: 6 }, 0)
        .to(".hero-title", { yPercent: -40, opacity: 0 }, 0.2)
        .from(".hero-night-text", { yPercent: 40, opacity: 0 }, 0.6);
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-svh overflow-hidden text-white">
      {/* Three skies on top of each other. Scrolling fades day → sunset → night */}
      <div className="absolute inset-0 bg-linear-to-b from-[#8ec5e6] to-[#f7dcb4]" />
      <div className="sunset-sky absolute inset-0 opacity-0 bg-linear-to-b from-[#3b3557] via-[#c9774b] to-[#f2a65a]" />
      <div className="night-sky absolute inset-0 opacity-0 bg-linear-to-b from-[#0f1a2a] via-[#1b2a3a] to-[#3b3557]" />

      <div className="sun absolute left-1/2 top-[46%] md:top-[30%] -translate-x-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#f2b36a] shadow-[0_0_120px_40px_rgba(242,166,90,0.55)]" />

      {/* Mountains and palms in front of the sun */}
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 inset-x-0 w-full h-[38%] text-dusk">
        <path fill="currentColor" d="M0 220 L180 120 L320 190 L520 80 L720 170 L900 100 L1100 180 L1280 110 L1440 170 L1440 320 L0 320 Z" />
      </svg>
      <div className="absolute bottom-0 inset-x-0 h-[18%] bg-night" />
      <Palm className="palm-far absolute bottom-[12%] right-[18%] w-24 md:w-32 text-night/90" />
      <Palm className="palm-near absolute -bottom-6 right-[4%] w-40 md:w-56 text-night" />
      <Palm className="palm-near absolute -bottom-10 left-[6%] w-36 md:w-48 text-night -scale-x-100" />

      <div className="relative h-full max-w-6xl mx-auto px-5 flex flex-col">
        <nav className="h-20 flex items-center justify-between">
          <span className="flex items-center gap-3">
            <img src={place.logo} alt={place.nameAr} className="w-12 h-12 rounded-full bg-white p-0.5" />
            <span className="leading-tight">
              <span className="block font-semibold">{place.nameAr}</span>
              <span className="block text-xs text-white/75" dir="ltr">{place.name}</span>
            </span>
          </span>
          <a href="#chalets" className="text-sm bg-white/15 backdrop-blur px-5 py-2 rounded-full">الفلل</a>
        </nav>

        <div className="hero-title mt-[12vh] text-center">
          <p className="tracking-[0.3em] text-sm uppercase" dir="ltr">{place.nameEn}</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4 drop-shadow">{place.tagline}</h1>
          <p className="mt-6 text-white/80">{place.location} · انزل لتحت ↓</p>
        </div>

        <div className="hero-night-text absolute inset-x-5 top-[34%] text-center">
          <h2 className="font-display text-5xl md:text-7xl">وبالليل، الجاكوزي دافي</h2>
        </div>
      </div>
    </section>
  );
}
