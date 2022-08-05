import React from "react";

const SideBarTitle = ({ className, children, ...props }) => {
  return (
    <h1
      className={`${className || ""} font-inter text-black text-2xl font-bold`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SideBarTitle;
