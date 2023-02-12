import { gsap } from "gsap";

const circlesScrollTriggerConfig = {
  trigger: ".first-screen__circles",
  start: "top 70%",
  end: "top 71%",
};

const circlesTimeLine = gsap.timeline({
  scrollTrigger: circlesScrollTriggerConfig,
  defaults: {
    duration: 1,
    delay: 1,
  },
});

circlesTimeLine
  .addLabel("firstShow")
  .to(
    ".gsap-circle_1",
    {
      opacity: 1,
    },
    "firstShow"
  )
  .addLabel("firstHideShowSecond")
  .to(
    ".gsap-circle_1",
    {
      opacity: 0,
    },
    "firstHideShowSecond"
  )
  .to(
    ".gsap-circle_2",
    {
      opacity: 1,
    },
    "firstHideShowSecond"
  )
  .addLabel("secondHideShowThird")
  .to(
    ".gsap-circle_2",
    {
      opacity: 0,
    },
    "secondHideShowThird"
  )
  .to(
    ".gsap-circle_3",
    {
      opacity: 1,
    },
    "secondHideShowThird"
  )
  .addLabel("secondThirdShowFourth")
  .to(
    ".gsap-circle_3",
    {
      opacity: 0,
    },
    "secondThirdShowFourth"
  )
  .to(
    ".gsap-circle_4",
    {
      opacity: 1,
    },
    "secondThirdShowFourth"
  )
  .addLabel("hideFourth")
  .to(
    ".gsap-circle_4",
    {
      opacity: 0,
    },
    "hideFourth"
  )
  .repeat(-1);
