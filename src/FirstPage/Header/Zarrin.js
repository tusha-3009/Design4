import React from "react";
import pic from "./Logo.jpg";
import "./Zarrin.css";
import { Link } from "react-router-dom";
function Zarrin() {
  return (
    <div className="logo">
      <img src={pic} alt="logo" />
      <div className="zarrin">
        <Link to="/">Zarrin</Link>
      </div>
    </div>
  );
}

export default Zarrin;
