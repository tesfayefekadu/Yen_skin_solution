"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-[#3A2B22]/10 bg-[#FFFDF8]/90 px-5 py-2.5 shadow-sm backdrop-blur-md sm:px-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative flex h-14 w-32 items-center"
            aria-label="Yen Skin Solution home"
          >
            <Image
              src="/images/logo/yen-logo-transparent.png"
              alt="Yen Skin Solution"
              fill
              priority
              className="object-contain object-left"
              sizes="128px"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#6B5A49] transition-colors duration-300 hover:text-[#B88A3B]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-3 rounded-full bg-[#3A2B22] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B88A3B] lg:inline-flex"
          >
            Book Now
            <span className="text-sm">→</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A2B22]/10 text-[#3A2B22] lg:hidden"
          >
            <span className="text-xl leading-none">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-2 overflow-hidden rounded-3xl border border-[#3A2B22]/10 bg-[#FFFDF8] p-5 shadow-xl lg:hidden">
            <div className="flex flex-col">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#3A2B22]/10 py-4 text-sm font-medium text-[#3A2B22]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-full bg-[#3A2B22] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}