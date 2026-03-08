import React from "react";
import CTAButton from "./CTAButton";

const navLinks = ["Home", "Curriculum", "About Us", "Contact Us"];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-6 py-8 md:px-12 lg:px-20">
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
            key={link}
            className={link === "Home" ? "text-[#EDFF23]" : "text-black"}
          >
            {link}
          </li>
        ))}
      </ul>

      <CTAButton variant="admission" className="px-6 py-3 text-xl md:px-7">
        Admission
      </CTAButton>
    </nav>
  );
};

export default Navbar;