"use client";

import { useEffect, useRef, useState } from "react";

const GlobalPageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const initialDelayTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const unmountTimerRef = useRef<number | null>(null);
  const hasHiddenRef = useRef(false);

  useEffect(() => {
    const hideLoader = () => {
      if (hasHiddenRef.current) return;
      hasHiddenRef.current = true;
      setIsVisible(false);
      unmountTimerRef.current = window.setTimeout(() => {
        setIsMounted(false);
      }, 420);
    };

    if (document.readyState === "complete") {
      initialDelayTimerRef.current = window.setTimeout(hideLoader, 180);
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    // Fallback in case the load event is delayed.
    fallbackTimerRef.current = window.setTimeout(hideLoader, 9000);

    return () => {
      window.removeEventListener("load", hideLoader);
      if (initialDelayTimerRef.current) window.clearTimeout(initialDelayTimerRef.current);
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
      if (unmountTimerRef.current) window.clearTimeout(unmountTimerRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-[#C9F4FF] transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Loading website"
      role="status"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="size-6 animate-bounce rounded-full border-2 border-black bg-[#FF2DDC]" />
          <span className="size-7 animate-bounce rounded-full border-2 border-black bg-[#FFCA2C] [animation-delay:120ms]" />
          <span className="size-6 animate-bounce rounded-full border-2 border-black bg-[#2CFF41] [animation-delay:220ms]" />
        </div>
        <p
          className="text-2xl uppercase text-black sm:text-3xl"
          style={{ fontFamily: "var(--font-luckiest-guy)", letterSpacing: "0.06em" }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default GlobalPageLoader;
