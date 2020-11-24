import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact/134">Contact</Link>
      <Link to="/contact">AllContact</Link>
    </div>
  );
}

export default Header;
