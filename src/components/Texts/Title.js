import React from "react";

const Title = ({ className, children, ...props }) => {
  return (
    <h1
      className={`${className || ""} font-inter text-black text-2xl font-light`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
