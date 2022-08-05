import React from "react";
const Table = ({ list, cells, columns }) => {
  return (
    <div className="w-full ">
      <table className="w-full border-t border-b table-auto">
        <thead className="z-10 text-left bg-gray-50">
          <tr>
            {columns.map((el, i) => (
              <th key={i} className="px-5 py-4 text-xs font-normal font-inter">
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border-b divide-y">
          {list?.map((element, i) => (
            <tr key={i}>
              {cells.map((cell, i) => (
                <td key={i} className="p-3 px-5 text-sm border-t">
                  {cell(element)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
