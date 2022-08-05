import React, { useState } from "react";
import { getInfo } from "../../api/api";
import ButtonFilter from "../Buttons/ButtonFilter";
import DropDownProject from "../DropDown/DropDownProject";
import DropDownStatus from "../DropDown/DropDownStatus";

const Filters = ({ list, setList }) => {
  const [statusType, setStatusType] = useState("All");
  const [projectType, setProjectType] = useState("All");
  const [filterList, setFilterList] = useState(getInfo());
  const [showDropDownProject, setShowDropDownProject] = useState(false);
  const [showDropDownStatus, setShowDropDownStatus] = useState(false);

  const clearFilters = () => {
    setStatusType("All");
    setProjectType("All");
    setList(getInfo());
  };
  return (
    <div className="flex items-center gap-4">
      <div>
        <ButtonFilter
          className="border-r-0 rounded-tl-md bg-gray-50 rounded-bl-md"
          onClick={() => clearFilters()}
        >
          Clear Filters
        </ButtonFilter>
        <DropDownStatus
          projectType={projectType}
          statusType={statusType}
          setStatusType={setStatusType}
          filterList={filterList}
          setFilterList={setFilterList}
          list={list}
          setList={setList}
          setShowDropDownProject={setShowDropDownProject}
          showDropDownStatus={showDropDownStatus}
          setShowDropDownStatus={setShowDropDownStatus}
          showDropDownProject={showDropDownProject}
        ></DropDownStatus>
        <DropDownProject
          statusType={statusType}
          projectType={projectType}
          setProjectType={setProjectType}
          filterList={filterList}
          setFilterList={setFilterList}
          list={list}
          setList={setList}
          setShowDropDownStatus={setShowDropDownStatus}
          showDropDownProject={showDropDownProject}
          setShowDropDownProject={setShowDropDownProject}
          showDropDownStatus={showDropDownStatus}
        ></DropDownProject>
      </div>
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
  );
};

export default Filters;
