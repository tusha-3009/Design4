import React from "react";
import "./LeftSide.css";
function LeftSide() {
  return (
    <>
      <div className="leftSide">
        <div className="featuredPost">Featured Post</div>
        <div className="heading">How AI will Change the Future</div>
        <div className="subHeading">
          The future of AI will see home robots having enchanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </div>
        <button className="readMore">Read More</button>
      </div>
    </>
  );
}

export default LeftSide;
