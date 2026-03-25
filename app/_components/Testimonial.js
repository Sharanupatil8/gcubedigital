"use client";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { motion } from "framer-motion";
function Testimonial() {
  return (
    <motion.div className="container  mx-auto  testimonial-bg border-2 border-indigo-900  max-w-7xl   px-6 py-6 md:py-12 rounded-3xl md:px-12 lg:px-16  my-8 md:my-12 lg:my-24">
      <div className="grid  items-center grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-0">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 50, 100] }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className=" text-3xl md:text-5xl lg:text-7xl font-bold dark:text-gray-100 p-0 line-height-heading text-gray-900 tracking-tight pb-4    col-span-12 md:col-span-9 ">
            Trusted clients testimonial
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mt-4">
            Discover how our creative solutions have transformed brands and
            delivered exceptional results for our clients. Here’s what they have
            to say about working with us
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block rounded-2xl mt-4 md:mt-8"
          >
            Get in touch with us &rarr;
          </a>
        </motion.div>
        <TestimonialSlider />
      </div>
    </motion.div>
  );
}

export default Testimonial;
