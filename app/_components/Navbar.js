"use client";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="container relative max-w-4xl mx-auto z-20 h-[60px] px-4 md:px-8 py-4 md:py-8 backdrop-blur-3xl bg-transparent flex items-center justify-between rounded-md border-[0.5px] border-sky-900">
      <Link href="/">
        <h3 className="font-jakarta dark:text-white text-gray-900 text-lg tracking-wider">
          Digicube
        </h3>
      </Link>
      <ul className="hidden lg:flex items-center gap-x-8">
        <li className="text-lg group dark:text-gray-300">
          <Link
            href="/services"
            className="group-hover:border-b border-sky-400 ease-out duration-75"
          >
            Services
          </Link>
        </li>
        <li className="text-lg group dark:text-gray-300">
          <Link
            href="/portfolio"
            className="group-hover:border-b border-sky-400 ease-out duration-75"
          >
            Portfolio
          </Link>
        </li>
        <li className="text-lg group">
          <Link
            href="/contact"
            className="group-hover:border-b bg-sky-600 px-4 py-2 text-gray-100 border-sky-400 ease-out duration-75"
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
      <button
        className="block lg:hidden hover:bg-sky-400 p-2 rounded-md ease-linear duration-75"
        onClick={toggleMobileMenu}
      >
        <HiBars3 className="h-8 w-8" />
      </button>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-[60px] left-0 right-0 bg-white dark:bg-gray-950 flex flex-col items-center gap-y-4 py-4 md:hidden z-20 shadow-lg border-t border-gray-200  dark:border-gray-700">
          <li className="text-lg dark:text-gray-300">
            <Link href="/services" onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li className="text-lg dark:text-gray-300">
            <Link href="/portfolio" onClick={toggleMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/contact"
              className="bg-sky-600 px-4 py-2 text-gray-100 rounded"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
