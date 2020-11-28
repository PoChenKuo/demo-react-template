import React from "react";
import MainPanel from "./MainPanel";
import Header from "./Header";
import {BrowserRouter as Router,} from 'react-router-dom'
import "@style/index.scss";
function Layout() {
  return (
    <Router>
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="context">
        <div className="left-panel map"></div>
        <MainPanel />
      </div>
      </div>
      </Router>
  );
}

export default Layout;
