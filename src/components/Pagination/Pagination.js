import React from "react";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const Pagination = ({ pageNumbers, nextPage, prevPage, currentPage }) => {
  return (
    <div className="flex items-center justify-between p-3 px-6">
      <h2 className="text-xs font-normal text-gray-400 font-inter">
        Page {currentPage} of {pageNumbers}
      </h2>
      <div className="flex gap-3">
        <ButtonSecondary onClick={() => prevPage()}>Previous</ButtonSecondary>
        <ButtonSecondary onClick={() => nextPage()}>Next</ButtonSecondary>
      </div>
    </div>
  );
};

export default Pagination;
