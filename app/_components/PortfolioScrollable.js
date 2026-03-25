"use client";
import React, { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { projects } from "./constants";
import Image from "next/image";

function PortfolioScrollable() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Calculate the scrollable width based on the number of images and their width
  const scrollableWidth = projects.length * 400; // Assuming each image is 400px wide

  // Transform the scroll position into horizontal movement
  const x = useTransform(scrollY, [0, scrollableWidth], [0, -scrollableWidth]);

  useEffect(() => {
    // Set the width of the container dynamically based on the number of images
    if (containerRef.current) {
      containerRef.current.style.width = `${scrollableWidth}px`;
    }
  }, [scrollableWidth]);

  return (
    <div className="container py-8 md:py-12 lg:py-16">
      <motion.div
        ref={containerRef}
        className="flex overflow-hidden"
        style={{ x }} // Apply the transformation based on scroll position
      >
        {projects.map((project, i) => (
          <div key={i} className="relative h-[400px] w-[400px] flex-shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default PortfolioScrollable;
