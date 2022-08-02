import AppLayout from "./components/Layouts/AppLayout";
import Title from "./components/Texts/Title";
import Subtitle from "./components/Texts/Subtitle";
import ButtonPrimary from "./components/Buttons/ButtonPrimary";
import { AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";
import InfoCard from "./components/Cards/InfoCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import Panel from "./components/Panel/Panel";
import Table from "./components/Table/Table";

function App() {
  const columns = [
    "Project name",
    "Type",
    <div className="flex items-center gap-1">
      <span>Closing Price</span>
      <AiOutlineArrowDown />
    </div>,
    <div className="flex items-center gap-1">
      <span>Project Start</span>
      <AiOutlineArrowDown />
    </div>,
    "Status",
    "Last Update",
  ];

  const list = [
    {
      projectName: "Mina DiFlor",
      companyName: "QGIS",
      type: "Mineral mapping",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "in progress",
      personInCharge: "Olivia Rhye",
      personInChargeEmail: "olivia@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
    {
      projectName: "MTCH SELL",
      companyName: "Software development",
      type: "Website",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "done",
      personInCharge: "Phoenix Baker",
      personInChargeEmail: "phoenix@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
    {
      projectName: "DDOG BUY",
      companyName: "Datadog Inc",
      type: "Mineral mapping",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "in progress",
      personInCharge: "Lana Steiner",
      personInChargeEmail: "lana@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
    {
      projectName: "ARKG BUY",
      companyName: "ARK Genomic",
      type: "Mineral mapping",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "cancelled",
      personInCharge: "Demi Wilkinson",
      personInChargeEmail: "demi@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
    {
      projectName: "SQ BUY",
      companyName: "MicroStrategy Inc",
      type: "Mineral mapping",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "success",
      personInCharge: "Candice We",
      personInChargeEmail: "candiec@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
    {
      projectName: "MSTR SELL",
      companyName: "MicroStrategy Inc",
      type: "Mineral mapping",
      closingPrice: 1000000,
      projectStart: "Jan 13 2022",
      status: "success",
      personInCharge: "Natali Craig",
      personInChargeEmail: "natali@untitleduei.com",
      avatar: "/fotogithub.JPG",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "in progress":
        return "bg-gray-100 text-gray-800";
      case "success":
        return "bg-green-50 text-green-800";
      case "cancelled":
        return "bg-red-50 text-red-800";
      case "done":
        return "bg-green-50 text-green-800";
      default:
        return "bg-red-50 text-red-800";
    }
  };

  const cells = [
    (element) => (
      <div className="flex items-center gap-2">
        <input
          className="text-xs font-thin text-blue-500 border-blue-300 rounded-md bg-blue-50"
          type="checkbox"
        />
        <div>
          <h3 className="text-sm font-normal text-black font-inter">
            {element.projectName}
          </h3>
          <span className="text-xs font-normal text-gray-600">
            {element.companyName}
          </span>
        </div>
      </div>
    ),
    (element) => (
      <h3 className="text-xs font-thin text-gray-600 font-inter">
        {element.type}
      </h3>
    ),
    (element) => (
      <h3 className="text-xs font-normal text-gray-400 font-inter">
        ${element.closingPrice}
      </h3>
    ),
    (element) => (
      <h3 className="text-xs font-normal text-gray-400 font-inter">
        {element.projectStart}
      </h3>
    ),
    (element) => (
      <span
        className={`rounded-md font-inter p-1 font-normal text-xs ${statusStyle(
          element.status
        )}`}
      >
        {element.status}
      </span>
    ),
    (element) => (
      <div className="flex items-center gap-2">
        <img
          alt=""
          className="w-10 h-10 rounded-full shrink-0"
          src={element.avatar}
        />

        <div>
          <h3 className="text-sm font-normal text-gray-800 font-inter">
            {element.personInCharge}
          </h3>
          <span className="text-xs font-normal text-gray-600 font-inter">
            {element.personInChargeEmail}
          </span>
        </div>
      </div>
    ),
  ];

  return (
    <AppLayout>
      <div className="flex justify-between w-full">
        <div>
          <Title>Welcome Back, Alec</Title>
          <Subtitle>View your quotes, invoices and more.</Subtitle>
        </div>
        <div>
          <ButtonPrimary className="p-1">
            <div className="flex items-center gap-2 text-sm text-white">
              <AiOutlinePlus style={{ fontColor: "white" }} /> Hire new service
            </div>
          </ButtonPrimary>
        </div>
      </div>
      <div className="flex gap-6 mt-14">
        <InfoCard title="Spent in Services" info="$ 100,000"></InfoCard>
        <InfoCard title="Open Projects" info="20"></InfoCard>
      </div>
      <div className="mt-14">
        <SearchBar searchFor="for Services" />
      </div>
      <Panel className="px-0 mt-5">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-lg font-normal text-black font-inter">
            Hired Projects
          </h2>
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
        <Table list={list} cells={cells} columns={columns}></Table>
      </Panel>
    </AppLayout>
  );
}

export default App;
