import React from "react";
import "./hero.scss";
import Rutvik from "../../assets/svg-images/rutvik.svg";
function Hero({ mode }) {
  return (
    <div className="w-full flex ">
      <div className={`image-container ${mode === "dark" && "dark"}`}>
        <img src={Rutvik} alt="" />
      </div>
    </div>
  );
}

export default Hero;
