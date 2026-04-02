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

  const style: CSSProperties = {
    width: "100%",
    ...(resolvedHeight ? { minHeight: resolvedHeight } : {}),
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
    <section className={`${heightClassName} ${className}`.trim()} style={style}>
      {children}
    </section>
  );
};

export default PatternBackground;
