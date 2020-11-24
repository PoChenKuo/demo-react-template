import React from "react";
import MainPanel from "./MainPanel";
import Header from "./Header";

import "@style/index.scss";
function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="context">
        <div className="left-panel map"></div>
        <MainPanel />
      </div>
    </div>
  );
}

export default Layout;
