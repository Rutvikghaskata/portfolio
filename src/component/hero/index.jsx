import React from "react";
import "./hero.scss";
import Rutvik from "../../assets/svg-images/rutvik.svg";
import Hello from "../../assets/svg-images/hello.svg";
import ReactJS from "../../assets/svg-images/reactjs.svg";
import JavaScript from "../../assets/svg-images/javascript.svg";

function Hero({ mode }) {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div className="w-full flex relative container">
      <div className={`image-container ${mode === "dark" && "dark"}`}>
        <img src={Rutvik} alt="" className="image" />
        <div className={`info-card card ${mode === "dark" && "dark"}`}>
          <img src={Hello} alt="" />
          <div>
            <p>Hello, I am</p>
            <h3>Rutvik</h3>
          </div>
        </div>
        <div className={`profession-card card ${mode === "dark" && "dark"}`}>
          <p>Software developer</p>
        </div>
        <div className={`react-card card ${mode === "dark" && "dark"}`}>
          <img src={ReactJS} alt="" />
        </div>
        <div className={`js-card card ${mode === "dark" && "dark"}`}>
          <img src={JavaScript} alt="" />
        </div>
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
