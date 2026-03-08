import React from "react";

type CTAButtonProps = {
  children: React.ReactNode;
  variant: "curriculum" | "admission";
  className?: string;
};

const CTAButton = ({ children, variant, className = "" }: CTAButtonProps) => {
  const variantClass =
    variant === "admission" ? "bg-[#EDFF23]" : "bg-[#F7F7F7]";

  return (
    <button
      className={`rounded-[32px] border-2 border-black ${variantClass} uppercase shadow-[3px_4px_0px_#000000] ${className}`}
      style={{ fontFamily: "var(--font-luckiest-guy)" }}
    >
      {children}
    </button>
  );
};

export default CTAButton;
