import React from "react";
import "./News.css";
function News() {
  return (
    <div className="news">
      <div className="development">
        DEVELOPMENT
        <p>16 March 2023</p>
      </div>
      <div className="newsHeading">
        How to make a Game look more attractive with New VR & AI Technology
      </div>
      <div className="google">
        Google has been investing in AL for many years and bringing its benefits
        to individuals, businesses and communities. Whether it's publishing
        state-of-the-art research, building helpful products or developing tools
        and resources that enable others, we're committed to making AL
        accessible to everyone.
      </div>
      <button className="readmore">Read More</button>
    </div>
  );
}

export default News;
