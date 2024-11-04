"use client";
import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  const texts = [
    "Web Development,",
    "UX UI Design,",
    "Digital Marketing,",
    "Web Development,",
    "UX UI Design,",
    "Digital Marketing,",
  ];

  // Create a single string of text with spaces between words
  const combinedText = texts.join("    "); // Adjust spacing as needed

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-950 py-5 lg:py-10 white-space-nowrap">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Moves from right to left
        transition={{
          duration: 30, // Duration of the animation
          ease: "linear",
          repeat: Infinity, // Repeat the animation indefinitely
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl stroke-text text-stroke-3 font-bold  whitespace-nowrap">
          {combinedText}
        </h1>
      </motion.div>
    </div>
  );
};

export default MovingText;
