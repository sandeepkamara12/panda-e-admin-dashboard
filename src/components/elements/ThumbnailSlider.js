import React from "react";

const ThumbnailSlider = ({ uploadedImages }) => {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0"
      }'
      className="relative"
    >
      <div className="hs-carousel flex space-x-2">
        {/* Slider Thumbnails */}
        <div className="flex-none">
          <div className="hs-carousel-pagination max-h-96 flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden">
            {uploadedImages &&
              uploadedImages?.length > 0 &&
              uploadedImages?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-[150px] hs-carousel-active:border-blue-400"
                  >
                    <div className="flex justify-center h-full bg-gray-100 p-2 dark:bg-neutral-900">
                      <span className="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
                        <img src={image} alt="" />
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Slider Main Image */}
        <div className="relative grow overflow-hidden min-h-96 bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {uploadedImages &&
              uploadedImages?.length > 0 &&
              uploadedImages?.map((image, index) => {
                return (
                  <div className="hs-carousel-slide" key={index}>
                    <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                      <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                        <img src={image} alt="" />
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Slider Arrows */}
          <button
            type="button"
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailSlider;
