import Image from "next/image";
import React from "react";
import { HiArrowUpRight, HiStar } from "react-icons/hi2";

function Hero() {
  return (
    <section className="relative px-4 w-full overflow-hidden ">
      <div className="max-w-6xl  z-40 md:py-12 lg:pt-20  py-16 mx-auto   md:px-6 lg:px-0">
        <div className="w-full lg:w-4/5 me-auto">
          <h1 className="text-5xl md:text-6xl text-center md:text-start lg:text-8xl  md:leading-[92px] font-bold text-gray-900 dark:text-white">
            We Develop
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
            <br className="hidden lg:block" />{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-300 dark:to-indigo-500 text-transparent bg-clip-text">
              amazing
            </span>{" "}
            websites <br /> for your business
            <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 text-transparent bg-clip-text">
              .
            </span>
          </h1>
          <p className="text-center md:text-start text-gray-700 dark:text-gray-400 mt-6 mb-4 md:mt-8 text-lg ">
            Transform your online presence with our expert web design &
            development and digital marketing solutions.{" "}
            <span className="hidden md:block"></span>{" "}
            <span className="hidden md:block">
              We help businesses like yours reach more customers, drive real
              engagement, and achieve measurable growth.
            </span>
          </p>
          <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row mt-8  md:mt-10 items-center  gap-x-4 md:gap-x-8">
            <a
              href="#contact"
              className="  border  block px-4 text-lg py-3 rounded-md border-indigo-500"
            >
              Let&apos;s Get Started{" "}
              <HiArrowUpRight className="text-lg inline-block " />
            </a>
            <div className="flex self-center">
              <div className="">
                <Image
                  src="/assets/avatars/image-1.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12  rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-2.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12  rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-3.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12  rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-4.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12  rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="-ms-4">
                <Image
                  src="/assets/avatars/image-5.jpg"
                  width="40"
                  height="40"
                  alt="user images"
                  className="h-12 w-12  rounded-full border-gray-200 border-4"
                />
              </div>
              <div className="flex flex-col ms-3 justify-start">
                <p className=" text-gray-700 dark:text-gray-300 text-xl  pb-0 mb-0">
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
        <div className="bg-gradient-to-r hidden md:block from-indigo-400 blur-3xl  opacity-60 to-indigo-600 h-[300px] w-[300px] rounded-full"></div>
      </div>
    </section>
  );
}

export default Hero;
