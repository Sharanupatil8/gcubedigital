"use client";
import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  const texts = [
    "Let's Talk,",
    "UX UI Design,",
    "Digital Marketing,",
    "Web Development,",
    "UX UI Design,",
    "Digital Marketing,",
  ];

  // Create a single string of text with spaces between words
  const combinedText = texts.join("    "); // Adjust spacing as needed

  return (
    <div className="overflow-hidden bg-gray-800 text-white dark:bg-gray-950 mb-0 py-5 lg:py-10 white-space-nowrap">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Moves from right to left
        transition={{
          duration: 30, // Duration of the animation
          ease: "linear",
          repeat: Infinity, // Repeat the animation indefinitely
        }}
      >
        <h1
          className="text-4xl font-jakarta md:text-6xl  lg:text-9xl
          font-bold  whitespace-nowrap"
        >
          {combinedText}
        </h1>
      </motion.div>
    </div>
  );
};

export default MovingText;
