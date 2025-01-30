import React from "react";
import DashboardCard from "../components/Dashboard/DashboardCard";
import UserList from "../components/user/UserList";
import OrderList from "../components/order/OrderList";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-rows-1 grid-cols-6 space-x-4 sm:space-x-3 mb-7">
        <DashboardCard
          title="Total Sales"
          color="#22c55e"
          value="136,578"
          status="up"
        />
        <DashboardCard
          title="Total Income"
          color="#FF5200"
          value="$37,802"
          status="down"
        />
        <DashboardCard
          title="Total Profit"
          color="#2377FC"
          value="34,945"
          status="up"
        />
        <DashboardCard
          title="Paid Orders"
          color="#CBD5E1"
          value="34,945"
          status="up"
        />
        <DashboardCard
          title="Ongoing Orders"
          color="#2377FC"
          value="34,945"
          status="up"
        />
        <DashboardCard
          title="Total Customers"
          color="#2377FC"
          value="34,945"
          status="up"
        />
      </div>
      <UserList />
      <OrderList />
    </div>
  );
};

export default Dashboard;
