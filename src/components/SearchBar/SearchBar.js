import { FiSearch } from "react-icons/fi";

import React from "react";

export const SearchBar = ({ className, searchFor = "", ...props }) => {
  return (
    <div className={`${className || ""}  relative max-w-sm`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 pointer-events-none">
        <FiSearch />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-3 pl-8 text-sm tracking-wide bg-white border border-gray-300 rounded-lg font-inter text-gray-00 focus:ring-blue-500 focus:border-blue-500"
        placeholder={`Search ${searchFor}`}
        required
        {...props}
      ></input>
    </div>
  );
};
