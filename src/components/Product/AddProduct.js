import React, { useEffect } from "react";
import "@preline/select";
import DateTimePicker from "../elements/DateTimePicker";
import FileUploadBar from "../elements/FileUploadBar";
import Input from "../elements/Input";
import Textarea from "../elements/Textarea";
import SingleSelect from "../elements/SingleSelect";
import MultiSelect from "../elements/MultiSelect";
import CheckboxGroup from "../elements/CheckboxGroup";
import ColorPicker from "../elements/ColorPicker";
import MultipleImageUpload from "../elements/MultipleImageUpload";
// import SingleImageUpload from "../elements/SingleImageUpload";

const AddProduct = () => {

  const brands = ["Apple", "Android", "Infinity", "Dell"];
  const categories = ["Apple", "Android", "Infinity", "Dell"];
  const sizes = ["S", "M", "L", "XL"];
  const uploadedImages = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    // "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    // "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    // "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    // "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    // "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];

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

              {/* Product Name */}
              <Input label="Product Name" fieldtype="text" placeholder="Enter product name" id="product_name" />

              {/* Description */}
              <Textarea label="Product Description" placeholder="Description" id="product_description" />

              {/* Brand */}
              <SingleSelect label="Product Brands" placeholder="Select Brands" options={brands} />

              {/* Category */}
              <MultiSelect label="Product Categories" placeholder="Select multiple categories" options={categories} />

              {/* Product Sizes */}
              <CheckboxGroup label="Product Sizes" id="product_size" options={sizes} />

                {/* Product Color */}
               <ColorPicker label="Color Picker" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
            <div className="w-full">
              {/* <SingleImageUpload /> */}

<MultipleImageUpload uploadedImages={uploadedImages} />
              

                {/* Image Preview */}
               
                <div className="space-y-2">
                    <label
                      htmlFor="hs-checkbox-in-form"
                      className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                    >
                      <input
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-checkbox-in-form"
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        Need to add Discount?
                      </span>
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

                <div id="hs-wrapper-for-copy" className="space-y-3">
                  <input
                    id="hs-content-for-copy"
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter Name"
                  />
                </div>

                <p className="mt-3 text-end">
                  <button
                    type="button"
                    data-hs-copy-markup='{
                      "targetSelector": "#hs-content-for-copy",
                      "wrapperSelector": "#hs-wrapper-for-copy",
                      "limit": 3
                    }'
                    className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                    Add Name
                  </button>
                </p>

                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Add more variations
                </button>
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
