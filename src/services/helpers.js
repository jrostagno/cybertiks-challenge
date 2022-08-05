export const statusStyle = (status) => {
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

export const divStyle = (status) => {
  switch (status) {
    case "in progress":
      return "bg-gray-500 text-gray-800";
    case "success":
      return "bg-green-400 text-green-800";
    case "cancelled":
      return "bg-red-400 text-red-800";
    case "done":
      return "bg-green-400 text-green-800";
    default:
      return "bg-red-400 text-red-800";
  }
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
