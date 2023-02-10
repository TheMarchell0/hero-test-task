import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".gsap-airplane", {
  duration: 3,
  opacity: 1,
  rotation: -360,
  scrollTrigger: {
    trigger: ".second-screen__road",
    start: "top 50%",
    end: "top 51%",
    markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "play reverse play none",
  },
});
