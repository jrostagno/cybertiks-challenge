import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Panel from "../Panel/Panel";

const InfoCard = ({ title, info }) => {
  return (
    <Panel>
      <div className="flex justify-between">
        <h3 className="text-xs font-inter font-normal text-gray-600">
          {title}
        </h3>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-black font-semibold text-3xl">{info}</h1>
        <div>
          <span className="rounded-xl flex items-center gap-1 px-1 py-1 text-green-800 bg-green-50 text-xs ">
            <AiOutlineArrowUp />
            100%
          </span>
        </div>
      </div>
    </Panel>
  );
};

export default InfoCard;
