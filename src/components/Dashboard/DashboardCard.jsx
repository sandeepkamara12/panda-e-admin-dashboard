import React from "react";
import SmoothLineChart from "../SmoothLineChart";

const DashboardCard = ({ title, color, value, status }) => {
  return (
    <div className="flex flex-wrap p-6 space-y-6 rounded-md bg-white shadow-dashboard">
      <div className="card-wrapper grid grid-cols-3 gap-2 w-full relative">
        <div className="flex flex-wrap items-center col-span-2">
          <div className="relative w-[43px] h-[45px] flex flex-wrap items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="52"
              viewBox="0 0 48 52"
              fill="none"
            >
              <path
                d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                fill={color}
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 icons absolute text-white left-0 right-0 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="card-value" style={{"width":"calc(100% - 48px)", "paddingLeft":"10px"}}>
            <p className="capitalize text-sm font-medium text-[#575864]">
              {title}
            </p>
            <h3 className="text-[20px] font-bold text-black">{value}</h3>
          </div>
        </div>
        <div className="card-dropdown flex flex-wrap items-center justify-end col-span-1 space-x-2">
          {status !== "up" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FF5200"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#22C55E"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          )}
          <span className="text-[#575864] font-bold text-sm">1.56%</span>
        </div>
      </div>
      <SmoothLineChart color={color} />
    </div>
  );
};

export default DashboardCard;
