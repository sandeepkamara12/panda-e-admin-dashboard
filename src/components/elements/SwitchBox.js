import React from "react";

const SwitchBox = ({
  id,
  label,
  textAlignment,
  isSwitchOn,
  checkSwitchBoxOnOrOff,
  content,
}) => {
  return (
    <div className="flex items-center">
      {textAlignment === "left" && (
        <label
          htmlFor={id}
          className="text-sm text-gray-500 me-3 dark:text-neutral-400"
        >
          {label}
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
      {textAlignment !== "left" && (
        <label
          htmlFor={id}
          className={`text-sm text-gray-500 ms-3 dark:text-neutral-400 ${
            content ? "relative pr-4 " : ""
          }`}
        >
          {label}
          {content ? (
            <>
              <div className="hs-tooltip [--trigger:hover] [--placement:right] inline-block ">
                <button
                  type="button"
                  className="absolute -top-1 -right-1 hs-tooltip-toggle"
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
                    <div className="py-3 px-4 text-sm text-gray-600 dark:text-neutral-400 relative z-20 bg-white">                      
                      <p>
                       {content}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </label>
      )}
    </div>
  );
};

export default SwitchBox;
