import React from "react";

const Subtitle = ({ children, className, ...props }) => {
  return (
    <h2
      className={`${
        className || ""
      } font-inter font-light text-lg tracking-wide text-gray-500`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
