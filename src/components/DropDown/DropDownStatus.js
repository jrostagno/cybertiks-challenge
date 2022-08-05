import React from "react";
import { getInfo } from "../../api/api";

const DropDownStatus = ({
  setList,
  projectType,
  setStatusType,
  statusType,
  setShowDropDownStatus,
  showDropDownStatus,
  setShowDropDownProject,
}) => {
  const filterStatus = (filterStatus) => {
    const allinfo = getInfo();

    if (projectType === "All" && filterStatus === "All") {
      return setList(allinfo);
    }

    if (projectType !== "All" && filterStatus === "All") {
      let newList = allinfo.filter((element) => element.type === projectType);
      return setList(newList);
    }
    if (projectType === "All" && filterStatus !== "All") {
      let newList = allinfo.filter(
        (element) => element.status === filterStatus
      );
      return setList(newList);
    }

    if (projectType !== "All" && filterStatus !== "All") {
      let newList = allinfo.filter(
        (element) =>
          element.status === filterStatus && element.type === projectType
      );
      return setList(newList);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setShowDropDownProject(false);
            setShowDropDownStatus(!showDropDownStatus);
          }}
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-normal tracking-wide text-gray-700 bg-white border border-r-0 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Status: {statusType}
        </button>
      </div>
      {showDropDownStatus && (
        <button
          tabindex="-1"
          onClick={() => setShowDropDownStatus(!showDropDownStatus)}
          className="fixed top-0 left-0 right-0 w-full h-full bg-black opacity-0 cursor-default button-o"
        ></button>
      )}
      <div
        className={`absolute right-0 ${
          showDropDownStatus ? "block" : "hidden"
        }  w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-0" role="none">
          <button
            onClick={() => {
              filterStatus("All");
              setShowDropDownStatus(!showDropDownStatus);
              setStatusType("All");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
            role="menuitem"
            id="menu-item-0"
          >
            All
          </button>
          <button
            onClick={() => {
              filterStatus("in progress");
              setShowDropDownStatus(!showDropDownStatus);
              setStatusType("in progress");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
            role="menuitem"
            id="menu-item-1"
          >
            In progress
          </button>
          <button
            onClick={() => {
              filterStatus("done");
              setShowDropDownStatus(!showDropDownStatus);
              setStatusType("done");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
            role="menuitem"
            id="menu-item-1"
          >
            done
          </button>
          <button
            onClick={() => {
              filterStatus("cancelled");
              setShowDropDownStatus(!showDropDownStatus);
              setStatusType("cancelled");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
            role="menuitem"
            id="menu-item-1"
          >
            cancelled
          </button>
          <button
            onClick={() => {
              filterStatus("success");
              setShowDropDownStatus(!showDropDownStatus);
              setStatusType("success");
            }}
            className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50"
            role="menuitem"
            id="menu-item-1"
          >
            success
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownStatus;
