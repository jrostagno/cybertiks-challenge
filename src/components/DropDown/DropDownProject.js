import React from "react";
import { getInfo } from "../../api/api";

const DropDownProject = ({
  setList,
  projectType,
  statusType,
  setProjectType,
  setShowDropDownProject,
  showDropDownProject,
  setShowDropDownStatus,
}) => {
  const filterStatus = (filterStatus) => {
    const allinfo = getInfo();

    if (statusType === "All" && filterStatus === "All") {
      return setList(allinfo);
    }

    if (statusType !== "All" && filterStatus === "All") {
      let newList = allinfo.filter((element) => element.status === statusType);
      return setList(newList);
    }
    if (statusType === "All" && filterStatus !== "All") {
      let newList = allinfo.filter((element) => element.type === filterStatus);
      return setList(newList);
    }

    if (statusType !== "All" && filterStatus !== "All") {
      let newList = allinfo.filter(
        (element) =>
          element.type === filterStatus && element.status === statusType
      );
      return setList(newList);
    }
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setShowDropDownStatus(false);
            setShowDropDownProject(!showDropDownProject);
          }}
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-normal tracking-wide text-gray-700 bg-white border border-gray-300 shadow-sm rounded-tr-md rounded-br-md hover:bg-gray-50 focus:outline-none"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Project: {projectType}
        </button>
      </div>
      {showDropDownProject && (
        <button
          tabindex="-1"
          onClick={() => setShowDropDownProject(!showDropDownProject)}
          className="fixed top-0 left-0 right-0 w-full h-full bg-black opacity-0 cursor-default button-o"
        ></button>
      )}
      <div
        className={`absolute right-0 ${
          showDropDownProject ? "block" : "hidden"
        }  w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-0" role="none">
          <button
            onClick={() => {
              filterStatus("All");
              setShowDropDownProject(!showDropDownProject);
              setProjectType("All");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
          >
            All
          </button>
          <button
            onClick={() => {
              filterStatus("Mineral mapping");
              setShowDropDownProject(!showDropDownProject);
              setProjectType("Mineral mapping");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
          >
            Mineal mapping
          </button>
          <button
            onClick={() => {
              filterStatus("Website");
              setShowDropDownProject(!showDropDownProject);
              setProjectType("Website");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
          >
            Website
          </button>
          <button
            onClick={() => {
              filterStatus("E-commerce");
              setShowDropDownProject(!showDropDownProject);
              setProjectType("E-commerce");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
          >
            E-commerce
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownProject;
