"use client"
import React, { CSSProperties, ReactNode } from "react";

type PatternBackgroundProps = {
    backgroundColor: string;
    boxColor: string;
    height?: number | string;
    heightClassName?: string;
    squareSize?: number;
    className?: string;
    children?: ReactNode;
};

const PatternBackground = ({
    backgroundColor,
    boxColor,
    height,
    heightClassName = "",
    squareSize = 100,
    className = "",
    children,
}: PatternBackgroundProps) => {
    const resolvedHeight =
        typeof height === "number" ? `${height}px` : height;
    const responsiveMinHeight = "clamp(200px, 80vh, 600px)";

    const style: CSSProperties = {
        width: "100%",
        // height: resolvedHeight ?? responsiveMinHeight,
        backgroundColor,
        backgroundImage: `
        linear-gradient(
        45deg,
        ${boxColor} 25%,
        transparent 25%,
        transparent 75%,
        ${boxColor} 75%,
        ${boxColor}
      ),
      linear-gradient(
        45deg,
        ${boxColor} 25%,
        transparent 25%,
        transparent 75%,
        ${boxColor} 75%,
        ${boxColor}
      )
    `,
        backgroundSize: `${squareSize}px ${squareSize}px`,
        backgroundPosition: `0 0, ${squareSize / 2}px ${squareSize / 2}px`,
    };

    return (
        <section
        // className={`  ${heightClassName} ${className}`.trim()}
        // style={resolvedHeight ? { minHeight: resolvedHeight } : undefined}
        >
            <div className={`${heightClassName} h-[250px] sm:h-[640px] lg:h-[700px] ${className}`}
                style={style} aria-hidden="true"
            >
                {/* <div className=""> */}
                {children}
                {/* </div> */}
            </div>
            {/* <div className="absolute inset-0 z-0" style={style} aria-hidden="true" />
      <div className="relative z-10">{children}</div> */}
        </section>
    );
};

export default PatternBackground;
