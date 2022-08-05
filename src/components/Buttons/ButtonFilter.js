import React from "react";

const ButtonFilter = ({ children, className, ...props }) => {
  return (
    <button
      className={`${
        className || ""
      } inline-flex items-center tracking-wide px-4 py-2 text-sm font-normal text-gray-700  border border-gray-300  hover:bg-gray-100 hover:text-gray-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonFilter;
