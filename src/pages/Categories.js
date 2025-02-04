import React from "react";
import AddCategory from "../components/products/AddCategory";
import CategoryList from "../components/category/CategoryList";

const Categories = ({ classes }) => {
  return (
    <div className={classes}>
      <form className="">
        {/* Admin Inner Header */}
        <div className="flex items-center flex-wrap justify-between gap-5 mb-6 sticky top-[67px] bg-white z-50 py-4 border-b px-4 sm:px-6">
          <h3>Add Category</h3>
          <div className="flex justify-center items-center space-x-6">
            <div className="col-span-1">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save Category
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
            <div className="w-full grid grid-cols-2 gap-10">
              <div className="w-full col-span-1">
                <AddCategory />
              </div>
              <div className="w-full col-span-1">
                <CategoryList />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Categories;
