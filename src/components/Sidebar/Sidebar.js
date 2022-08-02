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

const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 block w-64 h-full px-6 py-10 bg-white">
      <SideBarTitle>Cybertiks</SideBarTitle>
      <SearchBar className="mt-6"></SearchBar>
      <div className="flex flex-col gap-4 p-2 mt-8">
        <div className="flex items-center gap-2">
          <AiOutlineHome style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Projects
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineFile style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Quotes
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineContainer style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Contracts
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineBell style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Notifications
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineCreditCard style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Payments
          </h3>
        </div>
      </div>

      <div className="absolute bottom-0 flex flex-col gap-4 p-2 mt-8">
        <div className="flex items-center gap-2">
          <HiOutlineSupport style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Support
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineSetting style={{ fontSize: "1.2rem", color: "gray" }} />
          <h3 className="text-sm font-normal text-gray-500 font-inter">
            Settings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
