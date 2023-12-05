import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className="link">
      <div className="blue">
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <CiSearch style={{ fontSize: "25px" }} />
      <button >
        <Link to="/contact">Contact us </Link>
      </button>
    </div>
  );
}

export default Navbar;
