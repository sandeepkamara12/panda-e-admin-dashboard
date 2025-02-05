import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [sidebar, hideSidebar] = useState(false);
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(()=>{
    let path = location.pathname.split('/').filter(Boolean).pop();
    path = path === 'admin' ? 'dashboard' : path.split('-').join(' ');
    setPathname(path)
  },[location]);

  return (
    <div className="app-layout">
      <div className="app-content flex flex-wrap w-full">
        <Sidebar sidebar={sidebar} hideSidebar={hideSidebar} pathname={pathname} />
        {/* <div className={`content-area px-5 w-full ${sidebar ? 'hide' : ''}`}> */}
          <Header sidebar={sidebar} hideSidebar={hideSidebar} pathname={pathname} />
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
