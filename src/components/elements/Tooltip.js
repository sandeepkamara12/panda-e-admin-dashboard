import React from "react";

const Tooltip = ({content}) => {
  return (
    <div className="hs-tooltip [--trigger:hover] [--placement:right] inline-block ">
      <button
        type="button"
        className="absolute top-0 -right-1 hs-tooltip-toggle"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <div
          className="hs-tooltip-content hidden opacity-0 invisible hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity absolute  z-10 max-w-xs bg-white border border-gray-100 text-start rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700"
          role="tooltip"
        >
          <div className="hs-tooltip-arrow absolute w-4 h-4 top-0 bottom-0 m-auto z-10 bg-white border border-gray-100 rotate-45 dark:bg-neutral-800 dark:border-neutral-700"></div>
          <div className="py-3 px-4 text-sm text-gray-600 dark:text-neutral-400 font-normal relative z-20 bg-white">
            <p>{content}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Tooltip;
