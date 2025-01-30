import React from "react";
import Tooltip from "./Tooltip";

const SwitchBox = ({
  id,
  label,
  textAlignment = "left",
  isSwitchOn,
  checkSwitchBoxOnOrOff,
  content="",
}) => {
  return (
    <div className="flex items-center">
      {textAlignment === "left" && (
        <label
          htmlFor={id}
          className={`text-sm text-gray-500 me-3 dark:text-neutral-400 ${
            content ? "relative pr-4 " : ""
          }`}
        >
          {label}
          {content !== "" ? <Tooltip content={content} /> : ""}
        </label>
      )}
      <input
        type="checkbox"
        id={id}
        checked={isSwitchOn}
        onChange={() => checkSwitchBoxOnOrOff()}
        className="relative w-[35px] h-[22px] bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
  before:inline-block before:size-4 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
      />
      {textAlignment === "right" && (
        <label
          htmlFor={id}
          className={`text-sm text-gray-500 ms-3 dark:text-neutral-400 ${
            content ? "relative pr-4 " : ""
          }`}
        >
          {label}
          {content !== "" ? <Tooltip content={content} /> : ""}
        </label>
      )}
    </div>
  );
};

export default SwitchBox;
