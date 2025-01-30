import React, { useEffect, useState } from "react";
import "@preline/select";
import DateTimePicker from "../elements/DateTimePicker";
import Input from "../elements/Input";
import Textarea from "../elements/Textarea";
import SingleSelect from "../elements/SingleSelect";
import CheckboxGroup from "../elements/CheckboxGroup";
import ColorPicker from "../elements/ColorPicker";
import MultipleImageUpload from "../elements/MultipleImageUpload";
import Datepicker from "../elements/Datepicker";
import SwitchBox from "../elements/SwitchBox";
import Price from "../elements/Price";
import Quantity from "../elements/Quantity";

const AddProduct = () => {
  const uploadedImages = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80 ",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
  ];
  const emptyVariation = {
    variationId:1,
    uploadedImages:[{}]
  }
  const [variations, setVariations] = useState([{...emptyVariation}]);

  const brands = [
    "Allen Solly",
    "H&M",
    "Levis",
    "Zara",
    "Vero Moda",
    "Pepe Jeans",
    "Adidas",
    "Van Heusen",
    "Aurelia",
    "And",
    "Only",
    "Calvin Klein",
  ];
  const categories = [
    "Saris",
    "Shawls",
    "Skirts",
    "Suits",
    "Jackets",
    "Gowns",
    "Ponchos",
    "Shirt",
    "T-Shirt",
    "Jean",
    "Formal Pant",
    "Shoe",
    "Shorts",
    "Caps",
  ];
  const sizes = ["Small", "Medium", "Large", "Excel"];
 
  useEffect(() => {
    // Initialize Preline components after rendering
    if (typeof window !== "undefined" && window.hs) {
      window.hs.select();
    }
  }, []);

  const removeVariation = (variationId) => {
    setVariations(variations.filter((variation) => variation?.id!==variationId))
  }

  const addVariation = (variationObject) => {
    setVariations(prev=>[...prev, {...emptyVariation}]);
  }

  return (
    <div className="">
      <form className="">
        {/* Admin Inner Header */}
        <div className="flex items-center flex-wrap justify-between gap-5 mb-6 sticky top-[67px] bg-white z-50 py-4 border-b px-4 sm:px-6">
          <h3>Add Product</h3>
          <div className="flex justify-center items-center space-x-6">
            {/* Publish Btn */}
            <DateTimePicker />
            <Datepicker />
            {/* Schedule Btn */}
            <div className="col-span-1">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
              </svg>
            </button>
          </div>
          </div>
        </div>

        <div className="px-4 sm:px-6">
          <div className="flex flex-wrap flex-col gap-y-6">
            <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
              <div className="w-full grid grid-cols-2 gap-10">
                <div className="col-span-1 space-y-4">
                  {/* Product Name */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="span-cols-1">
                      <Input
                        label="Product Name"
                        fieldtype="text"
                        placeholder="Enter product name"
                        id="product_name"
                        classes=""
                      />
                    </div>
                    <div className="span-cols-1">
                      {/* Brand */}
                      <SingleSelect
                        label="Product Brands"
                        placeholder="Select Brands"
                        options={brands}
                      />
                    </div>
                    <div className="span-cols-1">
                      {/* Category */}
                      <SingleSelect
                        label="Product Categories"
                        placeholder="Select multiple categories"
                        options={categories}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <Textarea
                    label="Product Description"
                    placeholder="Description"
                    id="product_description"
                  />
                  
                </div>
                <div className="col-span-1 space-y-4">
                  <Textarea
                    label="Product Shipping / Return Policy"
                    placeholder="A breif info for product shipping and return policy."
                  />
                  {/* Product Additional Information */}
                  <Textarea
                    label="Additional Information"
                    placeholder="A breif info for product."
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap p-6 flex-column rounded-md bg-white shadow-admin">
             
              <div className="space-y-6">
                {

                  variations && variations?.length>0 && variations?.map((variation, index)=>{
                    return (       
                      <div className="p-6 bg-gray-500 rounded-md" key={index}>
                        <div>
                          <div className="flex flex-wrap items-center justify-end pb-6" onClick={()=>removeVariation(index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
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
                          <div className="w-full grid grid-cols-3 gap-6">
                            <div className="span-cols-1 bg-[#f9fafb] p-6 rounded-md">
                              <MultipleImageUpload uploadedImages={uploadedImages} />
                            </div>
                            <div className="span-cols-1 bg-[#f9fafb] p-6 rounded-md space-y-4">
                              {/* Product Sizes */}
                              <div className="space-y-2">
                                <SwitchBox
                                  id="product_size_switch"
                                  label="Need product sizes?"
                                />
                                <CheckboxGroup
                                  label="Product Sizes"
                                  id="product_size"
                                  options={sizes}
                                />
                              </div>
                              {/* Product Color */}
                              <div className="space-y-2">
                                <SwitchBox
                                  id="color_picker_switch"
                                  label="Need product color?"
                                />
                                <div className="flex flex-wrap gap-4 justify-between">
                                  <Input
                                    label="Product Color"
                                    id="product_color"
                                    placeholder="Product color like Red, Green, Blue"
                                    classes="w-adjust-color-width"
                                  />
                                  <ColorPicker label="Product Color" />
                                </div>
                              </div>
                            </div>
                            <div className="span-cols-1 bg-[#f9fafb] p-6 rounded-md">
                              {/* Product Price */}
                              <div className="space-y-4">
                                <SwitchBox
                                  id="need_discount"
                                  label="Need discount?"
                                />
                                <div className="grid flex-wrap grid-cols-2 gap-6">
                                  <Price
                                    label="Regular Price"
                                    fieldtype="text"
                                    placeholder="0.00"
                                    id="hs-input-with-leading-and-trailing-icon"
                                    classes=""
                                  />
                                  <Price
                                    label="Sale Price"
                                    fieldtype="text"
                                    placeholder="0.00"
                                    id="hs-input-with-leading-and-trailing-icon"
                                    classes=""
                                  />
                                </div>
                              </div>

                              {/* Quantity */}
                              <div className="space-y-2">
                                <Quantity label="Quantity" classes="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* Add more variation button */}
              <div className="w-full gap-6 flex flex-wrap items-center justify-end pt-6 text-gray-500">
                <button
                onClick={addVariation}
                  type="button"
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
                  Add more variation
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
