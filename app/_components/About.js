"use client";
import {
  HiChartBarSquare,
  HiCog8Tooth,
  HiCube,
  HiMiniChatBubbleBottomCenterText,
} from "react-icons/hi2";
import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Adjust this for more or less stagger delay
    },
  },
};

// Define child variants for staggered animations
const childVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" } },
};

function About() {
  const { scrollY } = useScroll();

  // Transform the scrollY value to move the gradient diagonally
  const xAxis = useTransform(
    scrollY,
    [0, 100, 400, 600, 700, 730, 750, 800, 900, 950],
    [0, 50, 100, 300, 400, 500, 600, 700, 800, 900]
  ); // Adjust end values for stronger movement
  const yAxis = useTransform(
    scrollY,
    [0, 100, 400, 600, 700],
    [0, 0, 100, 300, 350]
  );

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8  my-8 md:my-12 lg:my-24 relative">
      <motion.div
        style={{ x: xAxis }}
        className="h-64 w-64 rounded-full absolute -z-10 "
      >
        <Image
          src="/assets/paper-ball.webp"
          alt="paper ball"
          className="w-4/5 h-4/5 animate-spin  opacity-80"
          width="300"
          height="300"
        />
      </motion.div>
      <div className="grid-cols-12 grid  md:gap-x-12">
        <motion.p
          className=" text-gray-800 dark:text-white z-10 uppercase tracking-tight col-span-12 text-lg md:col-span-3 "
          whileInView={{ y: [-30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          01. Who We Are
        </motion.p>
        <motion.h2
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className=" text-3xl md:text-5xl font-bold dark:text-gray-100 p-0 line-height-heading text-gray-900 tracking-tight pb-4   lg:text-7xl col-span-12 md:col-span-9 "
        >
          We build innovative digital solutions that make your brand stand out
          online
        </motion.h2>
      </div>
      <motion.div
        className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 md:gap-y-8 lg:gap-y-0 lg:grid-cols-4 md:gap-x-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="px-6 py-8 border border-sky-900 rounded-md hover:-translate-y-1 duration-100 ease-linear hover:shadow-sm hover:shadow-sky-800"
          variants={childVariants}
        >
          <HiCube className="h-12 w-12 mb-4 rounded-md text-rose-400 bg-gray-100 dark:bg-gray-800 p-2" />
          <h3 className="text-2xl mb-2">Creativity</h3>
          <p className="text-gray-400">
            We craft custom designs that reflect your brand’s personality and
            leave a lasting impression.
          </p>
        </motion.div>

        <motion.div
          className="px-6 py-8 border border-sky-900 rounded-md hover:-translate-y-1 duration-100 ease-linear hover:shadow-sm hover:shadow-sky-800"
          variants={childVariants}
        >
          <HiChartBarSquare className="h-12 w-12 mb-4 rounded-md text-purple-400 bg-gray-100 dark:bg-gray-800 p-2" />
          <h3 className="text-2xl mb-2">Strategy</h3>
          <p className="text-gray-400">
            Our tailored digital strategies ensure your business reaches the
            right audience at the right time.
          </p>
        </motion.div>

        <motion.div
          className="px-6 py-8 border border-sky-900 rounded-md hover:-translate-y-1 duration-100 ease-linear hover:shadow-sm hover:shadow-sky-800"
          variants={childVariants}
        >
          <HiCog8Tooth className="h-12 w-12 mb-4 rounded-md text-emerald-400 bg-gray-100 dark:bg-gray-800 p-2" />
          <h3 className="text-2xl mb-2">Optimization</h3>
          <p className="text-gray-400">
            We optimize websites for fast performance and top search rankings,
            ensuring your brand shines online.
          </p>
        </motion.div>

        <motion.div
          className="px-6 py-8 border border-sky-900 rounded-md hover:-translate-y-1 duration-100 ease-linear hover:shadow-sm hover:shadow-sky-800"
          variants={childVariants}
        >
          <HiMiniChatBubbleBottomCenterText className="h-12 w-12 mb-4 rounded-md text-indigo-400 bg-gray-100 dark:bg-gray-800 p-2" />
          <h3 className="text-2xl mb-2">Support</h3>
          <p className="text-gray-400">
            We provide ongoing maintenance and support to keep your digital
            presence running smoothly.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
