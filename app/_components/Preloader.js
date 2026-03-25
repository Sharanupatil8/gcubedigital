"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // initial state (safe reset)
    gsap.set(".preloader-logo", { opacity: 0, y: 15 });
    gsap.set(".preloader-curtain", {
      scaleY: 1,
      transformOrigin: "bottom",
    });

    tl.to(".preloader-logo", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    })

      // small hold
      .to({}, { duration: 0.2 })

      // fade logo OUT quickly
      .to(".preloader-logo", {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      })

      // curtain wipe bottom → top
      .to(".preloader-curtain", {
        scaleY: 0,
        duration: 0.3,
        ease: "power4.inOut",
        onComplete: () => setLoading(false),
      });
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-root fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="preloader-logo flex items-center justify-center z-20">
        <Image
          src="/logo.png"
          width={200}
          height={160}
          alt="sharpxstudios"
          className="object-contain"
        />
      </div>

      {/* Curtain (white overlay that closes upward) */}
      <div className="preloader-curtain absolute inset-0 bg-white z-10" />
    </div>
  );
}
