import React from "react";
import "./hero.scss";
import Rutvik from "../../assets/svg-images/rutvik.svg";
function Hero({ mode }) {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div className="w-full flex relative">
      <div className={`image-container ${mode === "dark" && "dark"}`}>
        <img src={Rutvik} alt="" />
      </div>
      <span className={`round-drop drop-1 ${DarkMode && "dark"}`}></span>
      <span className={`round-drop drop-2 ${DarkMode && "dark"}`}></span>
      <span className={`round-drop drop-3 ${DarkMode && "dark"}`}></span>
      <span className={`round-drop drop-4 ${DarkMode && "dark"}`}></span>
      <span className={`round-drop drop-5 ${DarkMode && "dark"}`}></span>
    </div>
  );
}

export default Hero;
