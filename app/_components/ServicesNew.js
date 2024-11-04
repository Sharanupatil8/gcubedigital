"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const cardData = [
  {
    heading: "Web design & development",
    description:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    bgColor: "bg-pink-500",
    tags: ["Creative Web Design", "Web development", "E Commerce"],
    asset: "homepage.mp4",
  },

  {
    heading: "Digital Marketing",
    description:
      "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion, and increase conversions.",
    bgColor: "bg-green-500",
    tags: ["SEO", "Creative Campaigns", "Social Media"],
    asset: "homepage-1.mp4",
  },
  {
    heading: "Branding & UI Design",
    description:
      "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
    bgColor: "bg-sky-500",
    tags: ["Tone of voice", "Brand guidelines", "Visual identity"],
    asset: "homepage-3.mp4",
  },
];

function ServicesNew() {
  const targetRef = useRef(null);

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get());
  });

  const cardTimeLine = cardData.map((_, i) => {
    const start = 1900 + i * window.innerHeight;
    const end = 1900 + (i + 1) * window.innerHeight;

    return [start, end];
  });

  const timeline = [[0, 1900], ...cardTimeLine];
  /* eslint-disable */
  const animation = timeline.map((data) => ({
    scale: useTransform(scrollY, data, [1, 0.8]),
    opacity: useTransform(scrollY, data, [1, 0]),
  }));

  return (
    <section
      ref={targetRef}
      className=" container  relative bg-white dark:bg-gray-950 py-4 md:py-8 lg:py-16 rounded-t-3xl px-4 md:px-8 lg:px-16 "
      id="services"
    >
      <motion.div
        className="h-[500px] sticky top-0 z-0 flex items-center justify-between text-8xl px-18 overflow-hidden lg:text-[160px] uppercase lg:leading-[140px]"
        style={{ scale: animation[0].scale, opacity: animation[0].opacity }}
      >
        <h2 className="w-full h-max">
          Our <br /> <span className=" ml-10 md:ml-52">Services</span>
        </h2>
        <div className="rotate-90">
          <span className="">&rarr;</span>
        </div>
      </motion.div>

      {cardData.map((card, i) => (
        <>
          <motion.div
            key={i}
            style={{
              scale: animation[i + 1].scale,
              opacity: animation[i + 1].opacity,
            }}
            className="h-dvh  sticky top-0 "
          >
            <ProjectCard card={card} />
          </motion.div>
        </>
      ))}
    </section>
  );
}

export default ServicesNew;
