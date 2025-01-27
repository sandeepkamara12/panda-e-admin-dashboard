import React, { useEffect, useRef } from "react";
import FileUploadBar from "./FileUploadBar";
import ThumbnailSlider from "./ThumbnailSlider";
import Sortable from "sortablejs";

const MultipleImageUpload = ({ uploadedImages }) => {
  const sortableRef = useRef(null);
  useEffect(() => {
    if (sortableRef.current) {
      new Sortable(sortableRef.current, {
        animation: 150,
        dragClass: "!rounded-none",
      });
    }
  }, []);
  return (
    <>
      <div
        className="mb-4 bg-blue-100 text-sm text-blue-800 px-4 py-2"
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-soft-color-success-label"
      >
        <span id="hs-soft-color-success-label" className="font-bold">
          Drag Images:
        </span>
        First Image will be main image.
      </div>
      <ul
        id="hs-basic-usage-example-sortable"
        className="flex flex-wrap space-x-2 items-center"
        ref={sortableRef}
      >
        {uploadedImages &&
          uploadedImages?.length > 0 &&
          uploadedImages?.map((image, index) => {
            return (
              <li className="cursor-grab relative" key={index}>
                  <div className="bg-white w-[30px] h-[30px] absolute z-10 -right-1 -top-1 rounded-full flex flex-wrap items-center justify-center cursor-pointer transition-all hover:bg-red-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                <button
                  type="button"
                  className="flex bg-transparent"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="hs-large-modal"
                  data-hs-overlay="#hs-large-modal"
                >
                  <img
                    key={index}
                    className="inline-block size-[85px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src={image}
                    alt="Avatar"
                  />
                </button>
              </li>
            );
          })}
      </ul>

      <div className="space-y-2 mt-3">
        <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
          Product Images
        </label>
        <label
          htmlFor="af-submit-app-upload-images"
          className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
        >
          <input
            id="af-submit-app-upload-images"
            name="af-submit-app-upload-images"
            type="file"
            className="sr-only"
          />
          <svg
            className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
            />
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
          </svg>
          <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
            Browse your device or{" "}
            <span className="group-hover:text-blue-700 text-blue-600">
              drag 'n drop'
            </span>
          </span>
          <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
            Maximum file size is 2 MB
          </span>
          <FileUploadBar />
        </label>
      </div>


      <div
        id="hs-large-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-large-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="relative w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-end items-center py-3 px-4 absolute z-50 right-0">
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-large-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <ThumbnailSlider uploadedImages={uploadedImages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleImageUpload;
