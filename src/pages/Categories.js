import React from "react";
import AddCategory from "../components/products/AddCategory";
import CategoryList from "../components/category/CategoryList";

const Categories = ({ classes }) => {
  return (
    <div className={classes}>
        <form className="">
          {/* <div className="flex flex-wrap flex-col gap-y-6"> */}
          <div className="w-full grid grid-cols-2 gap-10">
            <div className="w-full col-span-1">
              <AddCategory />
            </div>
            <div className="w-full col-span-1">
              <CategoryList />
            </div>
          </div>
          {/* </div> */}
        </form>
    </div>
  );
};

export default Categories;
