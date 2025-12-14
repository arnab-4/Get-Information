import React from "react";

type Props = {
  size;
  title;
  value;
};

// repeted code for setting Additional Data user location

export default function BlockElem(props: Props) {
  return (
    <div className="flex-none flex-row space-x-2 group">
      <span
        className={`text-gray-400 font-semibold flex-none ${props.size} text-sm md:text-base font-Futuristic`}
      >
        {props.title}
      </span>
      <span className="data-value font-semibold text-sm md:text-base group-hover:glow-text transition-all duration-300">
        {props.value}
      </span>
    </div>
  );
}
