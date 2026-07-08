"use client";

import React, { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show the "Chat with us!" bubble shortly after load
    const timerShow = setTimeout(() => {
      setShowPromo(true);
    }, 1500);

    // Hide it after a few seconds so it doesn't obstruct the page permanently
    const timerHide = setTimeout(() => {
      setShowPromo(false);
    }, 6000);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerHide);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes instagram-attention {
          0%, 90%, 100% {
            transform: scale(1);
          }
          92% {
            transform: scale(1.1) rotate(-8deg);
          }
          94% {
            transform: scale(1.1) rotate(8deg);
          }
          96% {
            transform: scale(1.1) rotate(-4deg);
          }
          98% {
            transform: scale(1.1) rotate(4deg);
          }
        }
        @keyframes whatsapp-attention {
          0%, 90%, 100% {
            transform: scale(1);
          }
          92% {
            transform: scale(1.1) rotate(-8deg);
          }
          94% {
            transform: scale(1.1) rotate(8deg);
          }
          96% {
            transform: scale(1.1) rotate(-4deg);
          }
          98% {
            transform: scale(1.1) rotate(4deg);
          }
        }
        .animate-instagram-attention {
          animation: instagram-attention 8s ease-in-out infinite;
          animation-delay: 4s;
        }
        .animate-whatsapp-attention {
          animation: whatsapp-attention 8s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Instagram Button */}
        <div className="relative flex items-center group/insta">
          {/* Tooltip / Speech Bubble */}
          <div
            className="absolute right-full mr-3 whitespace-nowrap bg-white text-black font-bold uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000000] pointer-events-none opacity-0 translate-x-4 transition-all duration-300 ease-out group-hover/insta:opacity-100 group-hover/insta:translate-x-0"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Follow us!
            {/* Little triangle pointing to the button */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[7px] w-3 h-3 bg-white border-r-2 border-t-2 border-black rotate-45" />
          </div>

          <a
            href="https://www.instagram.com/the_childrens_house"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="animate-instagram-attention flex h-16 w-16 items-center justify-center rounded-full border-2 border-black text-white shadow-[4px_4px_0px_#000000] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[6px_6px_0px_#000000] active:translate-y-0 active:scale-100 active:shadow-[2px_2px_0px_#000000]"
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="relative flex items-center group/wa">
          {/* Tooltip / Speech Bubble */}
          <div
            className={`absolute right-full mr-3 whitespace-nowrap bg-white text-black font-bold uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000000] pointer-events-none transition-all duration-300 ease-out ${
              showPromo
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 group-hover/wa:opacity-100 group-hover/wa:translate-x-0"
            }`}
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Chat with us!
            {/* Little triangle pointing to the button */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[7px] w-3 h-3 bg-white border-r-2 border-t-2 border-black rotate-45" />
          </div>

          <a
            href="https://wa.me/97337937009"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="animate-whatsapp-attention flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[#25D366] text-white shadow-[4px_4px_0px_#000000] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[6px_6px_0px_#000000] active:translate-y-0 active:scale-100 active:shadow-[2px_2px_0px_#000000]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
