"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="pt-10 font-palanquin md:px-[150px] px-4 relative">
      <div className="flex justify-between items-center border border-neutral-200 p-3 rounded-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.svg"
            width={36}
            height={31}
            alt="ADMS logo"
          />
          <h1 className="ml-2 text-primary-500 text-3xl font-bold">ADMS</h1>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex justify-center gap-5 bg-[#F9F9F9] py-3 px-7 rounded-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Button className="bg-primary-800 text-white text-base font-normal rounded-full py-6 hidden md:flex items-center justify-center gap-2">
          Get App
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.75 12.75L3.25 10.25M12.75 0.75H3.75M12.75 0.75V9.75M12.75 0.75L6.25 7.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[3px] bg-[#005983] rounded-full transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[#005983] rounded-full transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[#005983] rounded-full transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#F8FAFA] z-50 flex flex-col">
          {/* Menu header with logo & close button */}
          <div className="flex justify-between items-center p-4 pt-10">
            <div className="flex items-center">
              <Image
                src="/assets/logo.svg"
                width={36}
                height={31}
                alt="ADMS logo"
              />
              <h1 className="ml-2 text-primary-500 text-3xl font-bold">ADMS</h1>
            </div>
            <button
              className="flex flex-col justify-center items-center gap-[5px] w-10 h-10"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-6 h-[3px] bg-[#005983] rounded-full rotate-45 translate-y-[3.5px]" />
              <span className="block w-6 h-[3px] bg-[#005983] rounded-full -rotate-45 -translate-y-[3.5px]" />
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-7 text-center text-base font-normal mt-12 px-6">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/support" onClick={() => setMenuOpen(false)}>
                Support
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 px-6 flex justify-center">
            <Button className="bg-primary-800 text-white text-base font-normal rounded-full py-6 flex items-center justify-center gap-2">
              Get App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M0.75 12.75L3.25 10.25M12.75 0.75H3.75M12.75 0.75V9.75M12.75 0.75L6.25 7.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          {/* Water vector at the bottom */}
          <div className="mt-auto rounded-b-2xl overflow-hidden">
            <img
              src="/assets/navbar_water_mark.svg"
              className="w-full h-[437px]"
              alt=""
            />
          </div>
        </div>
      )}
    </nav>
  );
}
