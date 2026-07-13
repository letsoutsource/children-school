"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Admission", href: "/admission" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="relative flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex items-center gap-2">
        <div className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-white bg-[#FFDA23] text-xl shadow-[5px_2px_1px_#BE2CD2]">
          <span className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div>

      <ul
        className="hidden items-center gap-8 lg:flex"
        style={{
          fontFamily: "var(--font-fredoka)",
          fontWeight: 700,
          fontSize: "24px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={`transition-colors duration-200 ${isActive(link.href) ? "text-[#BE2CD2]" : "text-black hover:text-[#BE2CD2]"
              }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/admission">
        <CTAButton
          variant="admission"
          className="hidden px-6 py-3 text-xl md:px-7 lg:inline-flex cursor-pointer"
        >
          Admission
        </CTAButton>
      </Link>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white shadow-[3px_4px_0px_#000] lg:hidden"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col items-center gap-1.5">
          <span
            className={`h-0.5 w-6 bg-black transition ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </div>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full right-4 left-4 mt-2 z-50 rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_6px_0px_#000] lg:hidden">
          <ul
            className="flex flex-col gap-4"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors duration-200 ${isActive(link.href) ? "text-[#BE2CD2]" : "text-black hover:text-[#BE2CD2]"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/admission" onClick={() => setIsMobileMenuOpen(false)}>
            <CTAButton
              variant="admission"
              className="mt-5 w-full px-6 py-3 text-xl"
            >
              Admission
            </CTAButton>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
