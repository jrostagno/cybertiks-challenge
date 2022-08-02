import React from "react";

const Panel = ({ className, children }) => {
  return (
    <div
      className={`${
        className || ""
      } p-5 shadow-md mx-auto w-full rounded-md bg-white`}
    >
      {children}
    </div>
  );
};

export default Panel;
