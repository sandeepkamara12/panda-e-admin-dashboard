import React from "react";

const ColorPicker = ({label, classes}) => {
  return (
    <div className={`space-y-2 ${classes}`}>
      <label
        className="inline-block text-sm font-medium text-gray-800 dark:text-neutral-200"
      >
        {/* {label} */}
      </label>
      <input
        type="color"
        className="h-[46px] w-[46px] block bg-white border-none cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
        id="hs-color-input"
        defaultValue="#2563eb"
        title="Choose your color"
      />
    </div>
  );
};

export default ColorPicker;
