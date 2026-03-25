"use client";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(linksRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, navRef);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
      );
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav
      ref={navRef}
      className={`sticky top-5 max-w-7xl mx-auto z-50 h-[60px] px-6 md:px-10 flex items-center justify-between rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border border-gray-200 shadow-md"
          : "bg-white/80 backdrop-blur-md border border-gray-200/70"
      }`}
    >
      {/* Logo */}
      <Link href="/" ref={logoRef}>
        <Image
          src="/logo.png"
          width="100"
          height="80"
          alt="sharpxstudios"
          className="h-full w-full scale-125 object-cover"
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-x-8">
        {navLinks.map((item, i) => (
          <li key={item.name} ref={(el) => (linksRef.current[i] = el)}>
            <Link
              href={item.href}
              className="text-md font-medium text-gray-500 hover:text-gray-900 transition relative group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}

        <li ref={(el) => (linksRef.current[3] = el)}>
          <Link
            href="#contact"
            className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        className="lg:hidden text-gray-600"
        onClick={() => setMobileMenuOpen((p) => !p)}
      >
        {isMobileMenuOpen ? (
          <HiXMark className="h-6 w-6" />
        ) : (
          <HiBars3 className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[70px] left-0 right-0 mx-4 bg-white border border-gray-200 rounded-2xl shadow-xl py-8"
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Link
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm hover:bg-indigo-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
