import React from "react";
type Props = {
  item: { title; value };
};
// repeated  table row code for setting General Information ip address,city,Zip Code ...etc
export default function TableRow(props:Props) {
  return (
    <tr className="border border-neonBlue/20 transition-all duration-300 hover:bg-neonBlue/5 group">
      <td className="border border-neonBlue/20 pl-2 md:pl-4 py-3 text-xs md:text-base w-28 md:w-auto text-gray-400 font-Futuristic">
        {props.item.title}
      </td>
      <td className="pl-4 data-value text-xs md:text-base group-hover:glow-text transition-all duration-300">
        {props.item.value}
      </td>
    </tr>
  );
}
