"use client";

import { motion } from "framer-motion";

function AnimatedHeading({ words }) {
  // const words = [
  //   "We",
  //   "build",
  //   "innovative",
  //   "digital",
  //   "solutions",
  //   "that",
  //   "make",
  //   "your",
  //   "brand",
  //   "stand",
  //   "out",
  //   "online",
  // ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { y: 100, opacity: 0, skewY: 7 },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold dark:text-gray-100 p-0 line-height-heading text-gray-900 tracking-tight pb-4 lg:text-7xl col-span-12 md:col-span-9"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default AnimatedHeading;
