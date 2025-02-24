import React from "react";
const SingleImageUpload = () => {
  return (
    <>
      <ul
        id="hs-basic-usage-example-sortable"
        className="flex-wrap gap-2 items-center grid grid-cols-8"
      >
        <li className="cursor-grab relative animate-pulse">
          <div className="bg-gray-200 w-[30px] h-[30px] absolute z-10 -right-1 -top-1 rounded-full flex flex-wrap items-center justify-center "></div>
          <div className="shrink-0">
            <button
              type="button"
              className="flex w-full aspect-square block bg-gray-200 rounded-full dark:bg-neutral-700"
            ></button>
          </div>
        </li>
        <li className="cursor-grab relative">
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
            className="flex bg-transparent items-center justify-center aspect-square"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-large-modal"
            data-hs-overlay="#hs-large-modal"
          >
            <img
              className="inline-block w-full h-full  rounded-full ring-2 ring-white dark:ring-neutral-900 object-cover"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Avatar"
            />
          </button>
        </li>
      </ul>
      <div
        data-hs-file-upload='{
      "url": "/upload",
      "extensions": {
        "default": {
          "class": "shrink-0 size-5"
        },
        "xls": {
          "class": "shrink-0 size-5"
        },
        "zip": {
          "class": "shrink-0 size-5"
        },
        "csv": {
          "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"m5 12-3 3 3 3\"/><path d=\"m9 18 3-3-3-3\"/></svg>",
          "class": "shrink-0 size-5"
        }
      }
    }'
      >
        <template data-hs-file-upload-preview="">
          <div className="p-3 bg-white border border-solid border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
            <div className="mb-1 flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <span
                  className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700 dark:text-neutral-500"
                  data-hs-file-upload-file-icon=""
                >
                  <img
                    className="rounded-lg hidden"
                    data-dz-thumbnail=""
                    alt=""
                  />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    <span
                      className="truncate inline-block max-w-[300px] align-bottom"
                      data-hs-file-upload-file-name=""
                    ></span>
                    .<span data-hs-file-upload-file-ext=""></span>
                  </p>
                  <p
                    className="text-xs text-gray-500 dark:text-neutral-500"
                    data-hs-file-upload-file-size=""
                  ></p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  data-hs-file-upload-remove=""
                >
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <div
                className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                data-hs-file-upload-progress-bar=""
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition-all duration-500 hs-file-upload-complete:bg-green-500"
                  style={{ width: "0" }}
                  data-hs-file-upload-progress-bar-pane=""
                ></div>
              </div>
              <div className="w-10 text-end">
                <span className="text-sm text-gray-800 dark:text-white">
                  <span data-hs-file-upload-progress-bar-value="">0</span>%
                </span>
              </div>
            </div>
          </div>
        </template>

        <div
          className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600"
          data-hs-file-upload-trigger=""
        >
          <div className="text-center">
            <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-6"
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" x2="12" y1="3" y2="15"></line>
              </svg>
            </span>

            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
              <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                Drop your file here or
              </span>
              <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                browse
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">
              Pick a file up to 2MB.
            </p>
          </div>
        </div>

        <div
          className="mt-4 space-y-2 empty:mt-0"
          data-hs-file-upload-previews=""
        ></div>
      </div>
    </>
  );
};

export default SingleImageUpload;
