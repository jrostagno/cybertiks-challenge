import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import SideBarTitle from "../Texts/SideBarTitle";
import {
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineBell,
  AiOutlineCreditCard,
  AiOutlineContainer,
  AiOutlineSetting,
} from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 block h-full px-4 py-10 bg-white w-72">
      <SideBarTitle>Cybertiks</SideBarTitle>
      <SearchBar className="mt-6"></SearchBar>
      <div className="flex flex-col gap-4 p-2 mt-8">
        <button className="flex items-center gap-2">
          <AiOutlineHome style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Projects
          </h3>
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineFile style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Quotes
          </h3>
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineContainer style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Contracts
          </h3>
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineBell style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Notifications
          </h3>
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineCreditCard style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Payments
          </h3>
        </button>
      </div>

      <div className="absolute bottom-0 flex flex-col w-64 gap-4 p-2 mt-8">
        <button className="flex items-center gap-2">
          <HiOutlineSupport style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Support
          </h3>
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineSetting style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal tracking-wide text-gray-500 font-inter">
            Settings
          </h3>
        </button>
        <div className="flex items-center justify-between gap-2 py-4 mt-4 mb-4 border-t">
          <div className="flex gap-2">
            <img
              alt=""
              className="w-10 h-10 rounded-full shrink-0"
              src="/mary.jpeg"
            />

            <div>
              <div>
                <h3 className="text-sm font-normal text-gray-800 font-inter">
                  Natali Craig
                </h3>
                <span className="text-xs font-normal text-gray-600 font-inter">
                  natali@untitleduei.com
                </span>
              </div>
            </div>
          </div>
          <button>
            <MdLogout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
