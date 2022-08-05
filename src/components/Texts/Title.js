import React from "react";

const Title = ({ className, children, ...props }) => {
  return (
    <h1
      className={`${
        className || ""
      } font-inter text-black text-3xl tracking-wide font-normal`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
