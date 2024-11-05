"use client";
import React from "react";
import { projects } from "./constants";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"; // Import motion from framer-motion
import AnimatedHeading from "./SecondaryHeading";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.01,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Portfolio = () => {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (invisible and moved down)
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Stagger effect based on index
      },
    }),
  };

  return (
    <section>
      <motion.div
        id="portfolio"
        className="container max-w-6xl mx-auto px-4 md:px-12 lg:px-16 my-8 md:my-12 py-8 md:py-16 lg:my-24"
      >
        {/* <motion.h2
        whileInView={{ y: [100, 0], opacity: [0, 50, 100] }}
        transition={{ duration: 0.1 }}
        h2
        className="text-3xl md:text-5xl text-center lg:text-7xl font-bold dark:text-gray-100 p-0 line-height-heading text-gray-900 tracking-tight pb-2 col-span-12 md:col-span-9"
      >
        Some featured works
      </motion.h2> */}
        <div className="text-center">
          <AnimatedHeading words={["Some", "featured", "works"]} />
        </div>

        <motion.p
          whileInView={{ y: [100, 0], opacity: [0, 50, 100] }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 text-center dark:text-gray-400"
        >
          A showcase of our top work, combining creativity, precision, and
          innovative design.
        </motion.p>

        <div className="grid grid-cols-1 gap-y-6 pt-8 md:pt-12 md:gap-y-12 gap-x-0 md:gap-x-12 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants} // Attach the variants
              initial="hidden" // Initial state
              whileInView="visible" // Animate to visible state when in view
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is in view
              custom={i} // Pass the index to the variants for stagger
            >
              <Tilt options={defaultOptions}>
                <div className="relative rounded-xl w-auto group border border-indigo-200 dark:border-indigo-800 backdrop-blur-3xl bg-opacity-50 dark:bg-gray-800 p-4 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width="600"
                    height="600"
                    loading="lazy"
                    className="w-full h-[300px] group-hover:scale-105 ease-linear duration-100 rounded-xl object-cover"
                  />
                  <h3 className="text-lg pt-3 font-medium">{project.name}</h3>
                  <p className="text-truncate text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 hover:cursor rounded-md bg-gray-200 dark:bg-gray-900 hover:bg-indigo-500 duration-75 ease-linear mt-2 inline-block"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
