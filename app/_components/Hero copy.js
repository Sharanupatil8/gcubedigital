"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const titleText = "Experience Our Expert Agency Services";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate once when in view

  const { scrollY } = useScroll(); // Track scroll position
  const rotation = useTransform(scrollY, [0, 600], [0, 600]); // Transform scroll position to rotation

  const letterAnimation = {
    hidden: { opacity: 0, y: 100, skewY: 7 },
    visible: { opacity: 1, y: 0, skewY: 0 },
  };

  const createLetterAnimation = (letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
        className="inline-block"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    );
  };

  return (
    <section className="h-full relative z-0">
      <div
        ref={ref}
        className="h-full max-w-6xl mx-auto px-4 md:px-8 flex text-center flex-col items-center justify-center relative z-10"
      >
        <h1 className="text-5xl md:text-6xl dark:text-white tracking-[-0.3px] text-gray-900 font-bold xl:text-8xl mt-0 md:mt-4">
          {titleText
            .split("")
            .map((char, index) => createLetterAnimation(char, index))}
        </h1>
        <p className="w-[80%] text-lg xl:text-2xl mt-6 md:mt-8 dark:text-gray-400">
          We offer expert services in website development, SEO, UX/UI design,
          and graphic design to help elevate your brand.
        </p>
        <a href="#contact" className="btn-primary mt-8">
          Start Your Project Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
