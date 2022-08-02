import React from "react";

const ButtonPrimary = ({ children, className, ...props }) => {
  return (
    <button
      className={`${
        className || ""
      } bg-blue-600 font-light text-lg font-inter text-white rounded-md px-3`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
