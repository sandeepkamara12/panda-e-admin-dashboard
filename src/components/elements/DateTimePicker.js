import React, { useState } from "react";
import SwitchBox from "./SwitchBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const checkSwitchBoxOnOrOff = () => {
    setIsSwitchOn((prev) => !prev);
    setIsDatePickerOpen((prev) => !prev);
  };
  return (
    <div className="">
      <div
        className={`${
          isDatePickerOpen ? "opacity-1" : "opacity-0"
        } dateTimePicker`}
      >
        <DatePicker
          showIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className=""
              onClick={() => setOpen(!open, true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          }
          open={open}
          showMonthDropdown
          showYearDropdown
          startDate={startDate}
          endDate={endDate}
          selectsRange
          yearDropdownItemNumber={5}
          scrollableYearDropdown
          calendarIconClassName="!p-0 top-0.5 -right-0.5 !w-5 !h-5 schedule_product_icon"
          selected={startDate && endDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            if (end) {
              setOpen(false);
            }
          }}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="border-transparent pointer-events-none !py-0 !pl-0 !pr-6 focus:outline-none focus:border-transparent focus:ring-0"
        />
      </div>
      <div className="flex justify-end">
        <SwitchBox
          id="sale_period"
          label="Add in sale"
          textAlignment="left"
          isSwitchOn={isSwitchOn}
          checkSwitchBoxOnOrOff={checkSwitchBoxOnOrOff}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
