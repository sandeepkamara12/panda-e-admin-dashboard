import React, { useEffect, useState } from "react";
import SwitchBox from "./SwitchBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const checkSwitchBoxOnOrOff = () => {
    setIsSwitchOn((prev) => !prev);
    setIsDatePickerOpen((prev) => !prev);
  };
  // const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={`${isDatePickerOpen ? "block" : "hidden"}`}>
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
              onClick={()=>setOpen(!open, true)}
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
          yearDropdownItemNumber={5}
          scrollableYearDropdown
          // minDate={new Date(currentYear, 0, 1)} // Start of current year
          // maxDate={new Date(currentYear + 1, 11, 31)}
          calendarIconClassName="!p-0 top-0.5 right-1 !w-5 !h-5 schedule_product_icon"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setOpen(false, true); 
          }}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="border-transparent pointer-events-none !py-0 !pl-0 !pr-6 focus:outline-none focus:border-transparent focus:ring-0"
        />
      </div>
      <SwitchBox
        id="schedule_product"
        label="You may schedule product"
        textAlignment="right"
        isSwitchOn={isSwitchOn}
        checkSwitchBoxOnOrOff={checkSwitchBoxOnOrOff}
        content="Scheduled product would automatically visible for the users at mentioned date and both vendor, admin would notify via email."
      />
    </>
  );
};

export default Datepicker;
