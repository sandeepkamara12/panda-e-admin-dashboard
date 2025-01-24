import React, { useEffect } from "react";
import "@preline/select";
import DateTimePicker from "../elements/DateTimePicker";
import FileUploadBar from "../elements/FileUploadBar";
import SingleImageUpload from "../elements/SingleImageUpload";

const AddProduct = () => {
  useEffect(() => {
    // Initialize Preline components after rendering
    if (typeof window !== "undefined" && window.hs) {
      window.hs.select();
    }
  }, []);
  return (
    <div>
      <div className="flex items-center flex-wrap justify-between gap-5 mb-7">
        <h3>Add Product</h3>
      </div>
      <div className="">
        <form className="grid grid-cols-3 gap-y-8 gap-x-5">
          <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
            <div className="w-full">
              <div className="space-y-4 sm:space-y-6">
                {/* Project Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Description
                  </label>
                  <textarea
                    id="af-submit-app-description"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    rows="6"
                    placeholder="Description"
                  ></textarea>
                </div>

                {/* Brand */}
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Brand
                  </label>

                  <div className="relative">
                    <select
                      multiple
                      data-hs-select='{
                          "placeholder": "Select Brands",
                          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                          "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                          "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                          "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                          "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                          "extraMarkup": "<div className=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg className=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                        }'
                    >
                      <option>Choose</option>
                      <option>Name</option>
                      <option>Email address</option>
                      <option>Description</option>
                      <option>User ID</option>
                    </select>

                    <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Category
                  </label>

                  <div className="relative">
                    <select
                      multiple
                      data-hs-select='{
                          "placeholder": "Select Category",
                          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                          "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                          "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                          "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                          "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                          "extraMarkup": "<div className=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg className=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                        }'
                    >
                      <option>Choose</option>
                      <option>Name</option>
                      <option>Email address</option>
                      <option>Description</option>
                      <option>User ID</option>
                    </select>

                    <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Product Sizes */}
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Sizes
                    </label>
                    <ul className="flex flex-col sm:flex-row">
                      <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-horizontal-list-group-item-checkbox-1"
                              name="hs-horizontal-list-group-item-checkbox-1"
                              type="checkbox"
                              className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <label
                            htmlFor="hs-horizontal-list-group-item-checkbox-1"
                            className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                          >
                            S
                          </label>
                        </div>
                      </li>

                      <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-horizontal-list-group-item-checkbox-2"
                              name="hs-horizontal-list-group-item-checkbox-2"
                              type="checkbox"
                              className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <label
                            htmlFor="hs-horizontal-list-group-item-checkbox-2"
                            className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                          >
                            M
                          </label>
                        </div>
                      </li>

                      <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-horizontal-list-group-item-checkbox-3"
                              name="hs-horizontal-list-group-item-checkbox-3"
                              type="checkbox"
                              className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <label
                            htmlFor="hs-horizontal-list-group-item-checkbox-3"
                            className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                          >
                            L
                          </label>
                        </div>
                      </li>
                      <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-horizontal-list-group-item-checkbox-4"
                              name="hs-horizontal-list-group-item-checkbox-4"
                              type="checkbox"
                              className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <label
                            htmlFor="hs-horizontal-list-group-item-checkbox-4"
                            className="ms-3.5 block w-full text-sm text-gray-600 dark:text-neutral-500"
                          >
                            XL
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  
                {/* Product Color */}
                <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                    >
                      Color Picker
                    </label>
                    <input
                      type="color"
                      className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                      id="hs-color-input"
                      defaultValue="#2563eb"
                      title="Choose your color"
                    />
                  </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
            <div className="w-full">
              
<SingleImageUpload />

              <div className="space-y-4 sm:space-y-6">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block size-[46px] rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Avatar"
                  />
                  <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                    <button
                      id="hs-avatar-group-dropdown"
                      className="hs-dropdown-toggle inline-flex items-center justify-center size-[46px] rounded-full bg-gray-100 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:border-neutral-800"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      <span className="font-medium leading-none">9+</span>
                    </button>

                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-avatar-group-dropdown"
                    >
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Chris Lynch
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Maria Guan
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Amil Evara
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Ebele Egbuna
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Preview */}
                <div className="space-y-2">
                  {/* <label
                    htmlFor="af-submit-app-upload-images"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Preview image
                  </label> */}

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

                <div className="grid flex-wrap grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="hs-input-with-leading-and-trailing-icon"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Regular Price
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-input-with-leading-and-trailing-icon"
                        name="hs-input-with-leading-and-trailing-icon"
                        className="py-3 px-4 ps-9 pe-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-gray-500 dark:text-neutral-500">
                          &#8377;
                        </span>
                      </div>
                      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                        <span className="text-gray-500 dark:text-neutral-500">
                          IN
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="hs-input-with-leading-and-trailing-icon"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Sale Price
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-input-with-leading-and-trailing-icon"
                        name="hs-input-with-leading-and-trailing-icon"
                        className="py-3 px-4 ps-9 pe-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-gray-500 dark:text-neutral-500">
                          &#8377;
                        </span>
                      </div>
                      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                        <span className="text-gray-500 dark:text-neutral-500">
                          IN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                  >
                    Quantity
                  </label>
                  <div
                    className="bg-white border border-gray-200 rounded-lg dark:bg-neutral-700 dark:border-neutral-700"
                    data-hs-input-number=""
                  >
                    <div className="w-full flex justify-between items-center gap-x-1">
                      <div className="grow py-2 px-3">
                        <input
                          className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                          // style={{ "-moz-appearance": "textfield" }}
                          type="number"
                          aria-roledescription="Number field"
                          defaultValue="1"
                          data-hs-input-number-input=""
                        />
                      </div>
                      <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
                        <button
                          type="button"
                          className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          aria-label="Decrease"
                          data-hs-input-number-decrement=""
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          aria-label="Increase"
                          data-hs-input-number-increment=""
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              
            </div>
          </div>
          <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
            <div className="w-full">
              <div className="space-y-4 sm:space-y-6">

                <div className="space-y-2">
                  <DateTimePicker />
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit your project
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
