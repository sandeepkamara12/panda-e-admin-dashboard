import React from "react";

const CheckboxGroup = ({ label, options }) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="af-submit-app-description"
        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
      >
        {label}
      </label>
      <ul className="flex flex-col sm:flex-row">
        {options &&
          options?.length > 0 &&
          options?.map((option, index) => {
            return (
              <li key={index} className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                <div className="relative flex items-start w-full">
                  <div className="flex items-center h-5">
                    <input
                      id={`id-${option}`}
                      name={`id-${option}`}
                      type="checkbox"
                      className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor={`id-${option}`}
                    className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                  >
                    {option}
                  </label>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CheckboxGroup;
