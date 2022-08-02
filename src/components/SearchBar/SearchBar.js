import { FiSearch } from "react-icons/fi";

import React from "react";

export const SearchBar = ({ className, searchFor = "" }) => {
  return (
    <div className={`${className || ""} relative max-w-sm`}>
      <div class="flex absolute inset-y-0 left-0 text-gray-600 items-center pl-3 pointer-events-none">
        <FiSearch />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-2 pl-8 text-sm bg-white border border-gray-300 rounded-lg font-inter text-gray-00 focus:ring-blue-500 focus:border-blue-500"
        placeholder={`Search ${searchFor}`}
        required
      ></input>
    </div>
  );
};
