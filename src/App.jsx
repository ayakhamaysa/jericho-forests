import { useEffect } from "react";
import { ScrollTrigger } from "./gsap";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Chalets from "./components/Chalets";
import Perks from "./components/Perks";
import Events from "./components/Events";
import Booking from "./components/Booking";

export default function App() {
  // After fonts load, sizes change a little, so recalculate the scroll positions
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <>
      <Hero />
      <Intro />
      <Chalets />
      <Perks />
      <Events />
      <Booking />
    </>
  );
}
