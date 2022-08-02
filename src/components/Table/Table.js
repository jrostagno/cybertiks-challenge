import React from "react";
const Table = ({ list, cells, columns }) => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-b table-fixed">
        <thead className="sticky z-10 text-left bg-gray-50">
          <tr>
            {columns.map((el, i) => (
              <th
                key={i}
                className="p-4 py-3 text-xs font-normal text-gray-500 font-inter"
              >
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border-b divide-y">
          {list?.map((element, i) => (
            <tr key={i}>
              {cells.map((cell, i) => (
                <td key={i} className="p-4 text-sm border-t">
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
