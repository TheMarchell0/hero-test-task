import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const firstBlock = document.querySelector(".first-screen"),
  secondBlock = document.querySelector(".second-screen"),
  mainBlock = document.querySelector(".main"),
  contentHeight =
    innerHeight > firstBlock.offsetHeight
      ? innerHeight - firstBlock.offsetHeight + 40
      : firstBlock.offsetHeight - innerHeight + 40;

const scrollTriggerConfig = {
  trigger: mainBlock,
  start: "top 0",
  end: () => `${firstBlock.scrollHeight * 2} bottom`,
  scrub: 1,
  anticipatePin: 1,
  ease: "Expo.easeOut",
  pin: true,
  toggleActions: "play none reverse none",
};

const mainTimeLine = gsap.timeline({
  scrollTrigger: scrollTriggerConfig,
});

mainTimeLine
  .addLabel("firstGoRight")
  .fromTo(
    ".first-screen__road-icon",
    { x: 0 },
    {
      x: 601,
    },
    "firstGoRight"
  )
  .addLabel("firstGoDown")
  .to(
    ".first-screen__road-icon",
    {
      y: 1030,
    },
    "firstGoDown"
  )
  .to(
    firstBlock,
    {
      y: `-${contentHeight}`,
    },
    "firstGoDown"
  )
  .to(
    secondBlock,
    {
      y: `-${contentHeight}`,
    },
    "firstGoDown"
  )
  .addLabel("firstGoFinish")
  .to(
    ".first-screen__road-icon",
    {
      x: 771,
    },
    "firstGoFinish"
  )
  .addLabel("showSecondScreen")
  .to(
    ".first-screen",
    {
      x: "-100vw",
    },
    "firstGoFinish"
  )
  .to(
    ".second-screen",
    {
      x: "-100vw",
    },
    "firstGoFinish"
  )
  .addLabel("goBoatRight")
  .to(
    ".gsap-boat",
    {
      x: 434,
      y: -16,
    },
    "goBoatRight"
  )
  .addLabel("goBoatTop")
  .to(
    ".gsap-boat",
    {
      x: 745,
      y: -24,
    },
    "goBoatTop"
  )
  .addLabel("hideBoatShowAirplane")
  .to(
    ".gsap-boat",
    {
      opacity: 0,
    },
    "hideBoatShowAirplane"
  )
  .to(
    ".gsap-airplane",
    {
      opacity: 1,
    },
    "hideBoatShowAirplane"
  )
  .addLabel("goAirplane")
  .to(
    ".gsap-airplane",
    {
      x: 300,
      y: -30,
    },
    "goAirplane"
  )
  .addLabel("finishAirplane")
  .to(
    ".gsap-airplane",
    {
      x: 567,
      y: -117,
    },
    "finishAirplane"
  );
