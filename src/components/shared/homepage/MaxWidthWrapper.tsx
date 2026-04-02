import React from "react";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className = "" }: MaxWidthWrapperProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1340px] px-[4px] ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
