import React from "react";
import OrderList from "../components/order/OrderList";
import DashboardCard from "../components/Dashboard/DashboardCard";

const Orders = ({ classes }) => {
  return (
    <div className={classes}>
      <form className="">
        <div className="w-full grid gap-10">
          <div className="w-full col-span-1">
            <div className="grid grid-rows-1 grid-cols-4 space-x-4 sm:space-x-3 mb-7">
              <DashboardCard
                title="Received Orders"
                color="#115e59"
                value="34,945"
                status="up"
              />
              <DashboardCard
                title="Shipped Orders"
                color="#FF5200"
                value="$37,802"
                status="down"
              />
              <DashboardCard
                title="Pending Orders"
                color="#fde047"
                value="136,578"
                status="up"
              />
              <DashboardCard
                title="Cancel Orders"
                color="#FF5200"
                value="34,945"
                status="up"
              />
            </div>
          </div>
          <div className="w-full col-span-1">
            <OrderList />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Orders;
