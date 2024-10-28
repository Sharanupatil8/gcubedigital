"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const titleText = "Experience Our Expert Agency Services";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Check if in view

  const createLetterAnimation = (letter, index) => {
    return (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate based on visibility
        exit="hidden"
        transition={{ duration: 0.3, delay: index * 0.05 }} // Adjust delay for typing speed
      >
        {letter}
      </motion.span>
    );
  };

  return (
    <section className="h-full relative z-0   ">
      <div
        ref={ref} // Attach ref for visibility detection
        className="h-full max-w-6xl mx-auto px-4 md:px-8 flex text-center flex-col items-center justify-center relative z-10"
      >
        <h1 className="text-5xl  md:text-6xl dark:text-white tracking-[-0.3px] text-gray-900 font-bold xl:text-8xl mt-0 md:mt-4">
          {titleText
            .split("")
            .map((char, index) => createLetterAnimation(char, index))}
        </h1>
        <p className="w-[80%]  text-lg xl:text-2xl mt-6 md:mt-8 dark:text-gray-400">
          We offer expert services in website development, SEO, UX/UI design,
          and graphic design to help elevate your brand.
        </p>
        <button className="btn-primary mt-8">Start Your Project</button>
      </div>
    </section>
  );
};

export default Hero;
