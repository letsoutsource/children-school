"use client";

import Image from "next/image";
import { useMemo } from "react";

const WavyContactCard = ({ gradientId = "wavyGrad" }: { gradientId?: string }) => {
    const valueTextClass =
        "uppercase text-white leading-[0.95] [-webkit-text-stroke:1.4px_black] sm:[-webkit-text-stroke:2.4px_black]";

    const wavyPath = useMemo(() => {
        const w = 820, h = 700, amp = 10, half = 28;
        const pad = amp + 4;
        const l = pad, t = pad, r = w - pad, b = h - pad;
        const p: string[] = [`M ${l} ${t}`];
        for (let x = l, i = 0; x < r; x += half, i++) {
            const nx = Math.min(x + half, r);
            p.push(`Q ${(x + nx) / 2} ${i % 2 === 0 ? t - amp : t + amp}, ${nx} ${t}`);
        }
        for (let y = t, i = 0; y < b; y += half, i++) {
            const ny = Math.min(y + half, b);
            p.push(`Q ${i % 2 === 0 ? r + amp : r - amp} ${(y + ny) / 2}, ${r} ${ny}`);
        }
        for (let x = r, i = 0; x > l; x -= half, i++) {
            const nx = Math.max(x - half, l);
            p.push(`Q ${(x + nx) / 2} ${i % 2 === 0 ? b + amp : b - amp}, ${nx} ${b}`);
        }
        for (let y = b, i = 0; y > t; y -= half, i++) {
            const ny = Math.max(y - half, t);
            p.push(`Q ${i % 2 === 0 ? l - amp : l + amp} ${(y + ny) / 2}, ${l} ${ny}`);
        }
        p.push("Z");
        return p.join(" ");
    }, []);

    return (
        <div className="relative mx-auto flex w-full max-w-[673px] justify-center">
            <div className="relative w-full max-w-[860px] px-7 py-12 sm:px-14 sm:py-14">
                <svg
                    viewBox="0 0 820 700"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none drop-shadow-[0_16px_28px_rgba(39,63,79,0.32)]"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="820" y2="700" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#FF2DDC" />
                            <stop offset="12%" stopColor="#FF4848" />
                            <stop offset="24%" stopColor="#FFA500" />
                            <stop offset="36%" stopColor="#FFCA2C" />
                            <stop offset="50%" stopColor="#2CFF41" />
                            <stop offset="64%" stopColor="#2CFAFF" />
                            <stop offset="78%" stopColor="#A02DFF" />
                            <stop offset="100%" stopColor="#FF2DDC" />
                        </linearGradient>
                    </defs>
                    <path
                        d={wavyPath}
                        fill="white"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="5"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center gap-8 text-center sm:gap-9">
                    <div className="space-y-1.5">
                        <p
                            className="text-[22px] xs:text-[28px] leading-none text-black sm:text-[36px]"
                            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                        >
                            Contact
                        </p>
                        <p className="text-[16px] xs:text-[18px] sm:text-[24px] font-semibold text-gray-800 tracking-wide font-sans">
                            +973 1769 9844
                        </p>
                        <p className="text-[16px] xs:text-[18px] sm:text-[24px] font-semibold text-gray-800 tracking-wide font-sans">
                            +973 3793 7009
                        </p>
                    </div>

                    <div className="space-y-1.5">
                        <p
                            className="flex items-center justify-center gap-2 text-[22px] xs:text-[28px] leading-none text-black sm:text-[36px]"
                            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                        >
                            <span aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black sm:h-7 sm:w-7">
                                    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.1 6.8-5.1H5.2Zm13.3 12a1.25 1.25 0 0 0 1.25-1.25V8.39l-7 5.26a1.25 1.25 0 0 1-1.5 0l-7-5.26v8.86A1.25 1.25 0 0 0 5.5 18.5h13Z" />
                                </svg>
                            </span>
                            Email
                        </p>
                        <p className="text-[16px] xs:text-[18px] sm:text-[24px] font-semibold text-gray-800 tracking-wide font-sans">
                            childrenshouse.kg@gmail.com
                        </p>
                    </div>

                    <div className="space-y-1.5 w-full flex flex-col items-center">
                        <p
                            className="flex items-center justify-center gap-2 text-[22px] xs:text-[28px] leading-none text-black sm:text-[36px]"
                            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                        >
                            <span aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black sm:h-7 sm:w-7">
                                    <path d="M12 2.75a7 7 0 0 1 7 7c0 5.36-7 11.5-7 11.5S5 15.1 5 9.75a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>
                            </span>
                            Address
                        </p>
                        <p className="text-[16px] xs:text-[18px] sm:text-[24px] font-semibold text-gray-800 tracking-wide font-sans">
                            Building 208, Road 55, Block 557,
                        </p>
                        <p className="text-[16px] xs:text-[18px] sm:text-[24px] font-semibold text-gray-800 tracking-wide font-sans">
                            Janabiyah Highway, Bahrain
                        </p>
                        <div className="w-full max-w-[420px] mt-4 px-2">
                            <iframe
                                src="https://maps.google.com/maps?q=Children's%20House%20Montessori%20Kindergarten%20Bahrain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="180"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000000]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="pointer-events-none absolute left-0 top-[42px] z-20 -rotate-[7deg] sm:-left-6 sm:top-[74px] lg:-left-4">
                <div className="relative h-[80px] w-[80px] overflow-hidden rounded-[14px] border-4 border-[#E245F7] bg-white shadow-[0_14px_24px_rgba(0,0,0,0.3)] sm:h-[110px] sm:w-[110px]">
                    <Image
                        src="/images/2ndimage.avif"
                        alt="Creative student photo"
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 110px, 80px"
                    />
                </div>
            </div>

            <div className="pointer-events-none absolute right-0 bottom-[76px] z-20 rotate-[9deg] sm:-right-6 sm:bottom-[110px] lg:-right-4">
                <div className="relative h-[82px] w-[82px] overflow-hidden rounded-[14px] border-4 border-[#FFCA2C] bg-white shadow-[0_14px_24px_rgba(0,0,0,0.3)] sm:h-[112px] sm:w-[112px]">
                    <Image
                        src="/images/3rdimage.avif"
                        alt="Happy child photo"
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 112px, 82px"
                    />
                </div>
            </div> */}
        </div>
    );
};

export default WavyContactCard;
