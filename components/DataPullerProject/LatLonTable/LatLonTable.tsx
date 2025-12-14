import React from "react";
type Props = {
  type;
  location;
};
export default function LatLonTable(props: Props) {
  switch (props.type) {
    case "Desktop":
      return <LatLongTableDesktop location={props.location} />;
    case "Mobile":
      return <LatLongTableMobile location={props.location} />;
  }
}

const LatLongTableDesktop = location => {
  return (
    <div className="md:block hidden">
      <table className="font-mono cyber-table">
        <tbody className="border border-neonBlue/30 md:text-sm text-xs">
          <tr className="border border-neonBlue/30 transition-all duration-300 hover:bg-neonBlue/5">
            <td className="border border-neonBlue/30 py-2 px-6 text-gray-400 font-Futuristic">Latitude :</td>
            <td className="data-value px-6">{location.location[0]}</td>
          </tr>
          <tr className="transition-all duration-300 hover:bg-neonBlue/5">
            <td className="border border-neonBlue/30 py-2 px-6 text-gray-400 font-Futuristic">Longitude :</td>
            <td className="data-value px-6">{location.location[1]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const LatLongTableMobile = location => {
  return (
    <div className="md:hidden block cyber-card p-3 pulse-glow">
      <table className="font-mono cyber-table">
        <tbody className="border border-neonBlue/30 md:text-xl text-xs">
          <tr className="border border-neonBlue/30 transition-all duration-300 hover:bg-neonBlue/5">
            <td className="border border-neonBlue/30 py-2 px-4 text-gray-400 font-Futuristic">Latitude :</td>
            <td className="data-value px-4">{location.location[0]}</td>
          </tr>
          <tr className="transition-all duration-300 hover:bg-neonBlue/5">
            <td className="border border-neonBlue/30 py-2 px-4 text-gray-400 font-Futuristic">Longitude :</td>
            <td className="data-value px-4">{location.location[1]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
