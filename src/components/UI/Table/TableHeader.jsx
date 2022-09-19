import { React } from "react";

const TableHeader = ({ header }) => {
  return (
    <tr>
      {header.map((el, i) => (
        <th key={i}>{el}</th>
      ))}
    </tr>
  );
};
export default TableHeader;
