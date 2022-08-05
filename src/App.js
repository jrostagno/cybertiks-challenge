import AppLayout from "./components/Layouts/AppLayout";
import Title from "./components/Texts/Title";
import Subtitle from "./components/Texts/Subtitle";
import ButtonPrimary from "./components/Buttons/ButtonPrimary";
import {
  AiOutlinePlus,
  AiOutlineCalendar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import InfoCard from "./components/Cards/InfoCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import Panel from "./components/Panel/Panel";
import Table from "./components/Table/Table";
import { useEffect, useState } from "react";

import { getInfo } from "./api/api";
import Pagination from "./components/Pagination/Pagination";
import Filters from "./components/Filters/Filters";
import { divStyle, formatNumber, statusStyle } from "./services/helpers";
import ButtonFilter from "./components/Buttons/ButtonFilter";

function App() {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setList(getInfo());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const listPerPage = 5;
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentList = list.slice(indexOfFirstList, indexOfLastList);

  const pageNumbers = Math.ceil(list.length / listPerPage);

  const nextPage = () => {
    if (currentPage < pageNumbers) {
      let nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      let prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };

  const sortByPrice = (list) => {
    if (price) {
      setList(
        list.sort((a, b) => {
          return a.closingPrice - b.closingPrice;
        })
      );
    } else {
      setList(
        list.sort((a, b) => {
          return b.closingPrice - a.closingPrice;
        })
      );
    }
  };

  const handelChange = (e) => {
    let service = e.target.value;
    setList(
      list.filter(
        (element) =>
          element.personInCharge
            .toLowerCase()
            .includes(service.toLowerCase()) ||
          element.type.toLowerCase().includes(service.toLowerCase()) ||
          element.projectName.toLowerCase().includes(service.toLowerCase()) ||
          element.companyName.toLowerCase().includes(service.toLowerCase())
      )
    );

    if (!e.target.value) setList(getInfo());
  };

  const handelOnChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <AppLayout>
      <div className="flex justify-between w-full">
        <div>
          <Title>Welcome Back, Alec</Title>
          <Subtitle>View your quotes, invoices and more.</Subtitle>
        </div>
        <div>
          <ButtonPrimary className="p-2">
            <div className="flex items-center gap-2 text-sm tracking-wide text-white">
              <AiOutlinePlus style={{ fontColor: "white" }} /> Hire new service
            </div>
          </ButtonPrimary>
        </div>
      </div>
      <div className="flex gap-6 mt-14">
        <InfoCard title="Spent in Services" info="$ 100,000"></InfoCard>
        <InfoCard title="Open Projects" info="20"></InfoCard>
      </div>
      <div className="flex justify-between mt-16">
        <SearchBar
          onChange={handelChange}
          className="w-96"
          searchFor="for Services"
        />

        <div>
          <div className="flex gap-6">
            <ButtonFilter className="flex items-center gap-3 bg-white rounded-md">
              <AiOutlineCalendar style={{ fontSize: "18px" }} />
              Jan 6, 2022-Jan 13, 2022
            </ButtonFilter>
            <ButtonFilter className="flex items-center gap-3 bg-white rounded-md">
              <BsFilter style={{ fontSize: "18px" }} />
              Filters
            </ButtonFilter>
          </div>
        </div>
      </div>

      <Panel className="px-0 py-0 mt-5">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-lg font-normal tracking-wide text-black font-inter">
            Hired Projects
          </h2>
          <Filters list={list} setList={setList}></Filters>
        </div>
        <Table
          list={currentList}
          cells={[
            (element) => (
              <div className="flex items-center gap-3">
                <input
                  className="text-xs font-thin text-blue-500 border-blue-300 rounded-md bg-blue-50"
                  type="checkbox"
                  checked={isChecked}
                />
                <div>
                  <h3 className="text-sm font-normal text-gray-800 font-inter">
                    {element.projectName}
                  </h3>
                  <span className="text-xs font-normal text-gray-500">
                    {element.companyName}
                  </span>
                </div>
              </div>
            ),
            (element) => (
              <h3 className="text-sm font-light text-gray-500 font-inter">
                {element.type}
              </h3>
            ),
            (element) => (
              <h3 className="text-sm font-light text-gray-500 font-inter">
                {formatNumber(element.closingPrice)}
              </h3>
            ),
            (element) => (
              <h3 className="text-sm font-light text-gray-500 font-inter">
                {element.projectStart}
              </h3>
            ),
            (element) => (
              <div>
                <span
                  className={`rounded-xl font-inter p-1 px-2 inline-flex items-center gap-2 font-normal text-xs ${statusStyle(
                    element.status
                  )}`}
                >
                  <div
                    className={`rounded-full  ${divStyle(
                      element.status
                    )} w-2 h-2`}
                  />
                  <span>{element.status}</span>
                </span>
              </div>
            ),
            (element) => (
              <div className="flex items-center gap-2">
                {element.avatar ? (
                  <img
                    alt=""
                    className="w-10 h-10 rounded-full shrink-0"
                    src={element.avatar}
                  />
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 shrink-0">
                    <span className="text-sm font-light text-gray-700 uppercase">
                      {`${element.personInCharge[0]}${
                        element.personInCharge.split(" ")[1][0]
                      }`}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-normal text-gray-600 font-inter">
                    {element.personInCharge}
                  </h3>
                  <span className="text-xs font-light text-gray-500 font-inter">
                    {element.personInChargeEmail}
                  </span>
                </div>
              </div>
            ),
          ]}
          columns={[
            <div className="flex gap-3">
              <input
                className="text-xs font-thin text-blue-500 border-blue-300 rounded-md bg-blue-50"
                type="checkbox"
                onChange={handelOnChange}
              />
              <h2 className="text-xs font-normal tracking-wide text-gray-600">
                Project name
              </h2>
            </div>,
            <h2 className="text-xs font-normal tracking-wide text-gray-600">
              Type
            </h2>,
            <button
              onClick={() => {
                setPrice(!price);
                sortByPrice(list);
              }}
              className="flex items-center gap-1"
            >
              <span className="text-xs font-normal tracking-wide text-gray-600">
                Closing Price
              </span>
              {price ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            </button>,
            <div className="flex items-center gap-1">
              <span className="text-xs font-normal tracking-wide text-gray-600">
                Project Start
              </span>
              <AiOutlineArrowDown />
            </div>,
            <h2 className="text-xs font-normal tracking-wide text-gray-600">
              Status
            </h2>,
            <h2 className="text-xs font-normal tracking-wide text-gray-600">
              Last Update
            </h2>,
          ]}
        ></Table>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
        ></Pagination>
      </Panel>
    </AppLayout>
  );
}

export default App;
