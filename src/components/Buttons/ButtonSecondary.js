import React from "react";

const ButtonSecondary = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className || " "
      } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
