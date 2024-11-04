"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./SecondaryHeading";
function Services() {
  return (
    <section className="container max-w-8xl mx-auto px-4 md:px-12 my-8 md:my-12 lg:my-24">
      <div className="bg-pattern bg-gray-100 dark:bg-gray-950 py-4 md:py-8 lg:py-16 rounded-t-3xl px-4 md:px-8 lg:px-12">
        {/* <motion.h2
          whileInView={{ y: [100, 50, 0], skewX: [20, 0] }}
          transition={{ duration: 0.3, type: "tween" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-gray-100 tracking-tight pb-4 text-gray-900"
        >
          Transforming Ideas into Powerful Digital Experiences
        </motion.h2> */}
        <AnimatedHeading
          words={[
            "Transforming",
            "Ideas",
            "Into",
            "Powerful",
            "Digital",
            "Experiences",
          ]}
        />
        <div className="flex flex-col mt-6 md:mt-12">
          {/** Repeat this block for each service */}
          {[
            {
              id: "01",
              title: "Web Development",
              description:
                "Custom, scalable websites built with the latest technologies for optimal performance.",
              image: "/assets/web-development.webp",
            },
            {
              id: "02",
              title: "Digital Marketing",
              description:
                "Targeted strategies to boost your online presence and engage your audience.",
              image: "/assets/digital-marketing.webp",
            },
            {
              id: "03",
              title: "SEO Marketing",
              description:
                "Optimizations to improve search rankings and drive organic traffic.",
              image: "/assets/seo.webp",
            },
            {
              id: "04",
              title: "Graphic Design",
              description:
                "Compelling visuals for branding and marketing that elevate your identity.",
              image: "/assets/graphic-design.webp",
            },
          ].map((service, i) => (
            <motion.div
              key={service.i}
              whileInView={{ x: [-100, 0], opacity: [0, 100] }}
              transition={{ duration: 0.3, type: "tween", delay: i * 0.3 }}
              className="grid hover px-4 duration-100 ease-linear group hover:bg-gray-800 hover:text-gray-50 hover:scale-105 grid-cols-12 items-center gap-x-4 md:gap-x-8 justify-between w-full border-t border-sky-900 py-3 md:py-6 lg:py-12"
            >
              <div className="text-2xl font-bold col-span-12 lg:col-span-1">
                {service.id}
              </div>
              <div className="flex col-span-12 md:col-span-4 gap-x-3 items-center text-2xl md:text-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width="200"
                  height="100"
                  className="h-[75px] hidden  lg:block w-auto object-cover rounded-full"
                />
                <h3 className="text-left mt-3 lg:mt-0">
                  {service.title.split(" ")[0]}{" "}
                  <br className="lg:block hidden" />{" "}
                  {service.title.split(" ")[1]}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 group-hover:text-gray-100  text-gray-700 dark:text-gray-200">
                {service.description}
              </div>
              <div className="col-span-12 md:col-span-2">
                <button className="px-6 py-4 mt-3 mb-4 md:mb-0 md:mt-0 border border-sky-800 rounded-full hover:bg-sky-500 transition duration-200">
                  Let&apos;s Talk &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
