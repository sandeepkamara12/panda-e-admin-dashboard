import React from "react";

const ColorPicker = ({label}) => {
  return (
    <div className="space-y-2">
      <label
        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
      >
        {label}
      </label>
      <input
        type="color"
        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
        id="hs-color-input"
        defaultValue="#2563eb"
        title="Choose your color"
      />
    </div>
  );
};

export default ColorPicker;
