import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".first-screen__title", {
  opacity: 0,
  duration: 1,
});

gsap.from(".first-screen__text", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 1.2,
});

gsap.from(".first-screen__text strong", {
  opacity: 0,
  duration: 1,
  delay: 2.2,
});

gsap.from(".first-screen__quote", {
  scrollTrigger: {
    trigger: ".first-screen__quote",
    start: "top 30%",
    duration: 1,
    end: "top 31%",
    toggleActions: "play none reverse none",
  },
  opacity: 0,
});
