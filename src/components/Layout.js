import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";

const Layout = () => {
  const [sidebar, hideSidebar] = useState(false);
  return (
    <div className="app-layout">
      <div className="app-content flex flex-wrap w-full">
        <Sidebar sidebar={sidebar} hideSidebar={hideSidebar} />
        {/* <div className={`content-area px-5 w-full ${sidebar ? 'hide' : ''}`}> */}
          <Header sidebar={sidebar} hideSidebar={hideSidebar} />
          <div className="w-full content-area">
            <Outlet />
          </div>
          <Footer />
        {/* </div> */}
      </div>
      
    </div>
  );
};

export default Layout;
