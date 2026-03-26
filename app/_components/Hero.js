"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const avatarsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
          },
          "-=0.3",
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          avatarsRef.current.children,
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-full px-2 md:px-4 w-full overflow-hidden "
    >
      <div className="max-w-7xl h-full pb-18 z-40 mx-auto md:px-6 lg:px-0">
        <div className="w-full flex flex-col justify-center h-full lg:w-4/5 lg:me-auto">
          <div ref={badgeRef} className="flex items-center gap-3 mb-8">
            <span className="h-px w-7 bg-indigo-500 shrink-0" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-indigo-500 font-semibold">
              Web Development · Digital Marketing · AI Automation
            </span>
          </div>

          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl trac text-center md:text-start lg:text-8xl md:leading-[92px] font-bold text-gray-900 dark:text-white"
          >
            We help
            <span className="ml-4 hidden md:inline-block h-12 w-12 mb-4 rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L14 9.5L22 12L14 14.5L12 22L10 14.5L2 12L10 9.5Z"
                  fill="url(#gradient)"
                />
              </svg>
            </span>
            <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-300 dark:to-indigo-500 text-transparent bg-clip-text inline-block">
              businesses
            </span>{" "}
            grow in <br /> the digital world
            <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 text-transparent bg-clip-text">
              .
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-center md:text-start text-gray-700 dark:text-gray-400 mt-6 mb-4 md:mt-8 text-lg"
          >
            Transform your online presence with our expert web design &
            development and digital marketing solutions.
            <span className="hidden md:block"></span>
            <span className="hidden md:block">
              We help businesses like yours reach more customers, drive real
              engagement, and achieve measurable growth.
            </span>
          </p>

          <div
            ref={buttonRef}
            className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row mt-8 md:mt-10 items-center gap-x-4 md:gap-x-8"
          >
            <a
              href="#contact"
              className="bg-indigo-500 text-white border block px-4 text-lg py-3 rounded-md border-indigo-500"
            >
              Let&apos;s Get Started{" "}
              <HiArrowUpRight className="text-lg inline-block " />
            </a>

            <div ref={avatarsRef} className="flex self-center">
              {/* avatars unchanged */}
              <div>
                <Image
                  src="/assets/avatars/image-1.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12 rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-2.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12 rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-3.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12 rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-4.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12 rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-5.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12 rounded-full border-gray-200 border-4"
                />
              </div>

              <div className="flex flex-col ms-3 justify-start">
                <p className="text-gray-700 dark:text-gray-300 text-xl pb-0 mb-0">
                  20+
                </p>
                <p className="text-sm mt-0 pt-0 text-gray-600 dark:text-gray-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-[200px] lg:-right-[200px] -translate-y-1/2">
        <div className="bg-gradient-to-r hidden md:block from-indigo-400 blur-3xl opacity-60 to-indigo-600 h-[300px] w-[300px] rounded-full"></div>
      </div>
    </section>
  );
}

export default Hero;
