import React, { useEffect, useState } from "react";
import "./hero.scss";
import Rutvik from "../../assets/svg-images/rutvik.svg";
import Hello from "../../assets/svg-images/hello.svg";
import ReactJS from "../../assets/svg-images/reactjs.svg";
import JavaScript from "../../assets/svg-images/javascript.svg";
import NextJs from "../../assets/svg-images/nextjs.svg";
import AngularJs from "../../assets/svg-images/angularjs.svg";
import NodeJs from "../../assets/svg-images/nodejs.svg";

function Hero({ mode }) {
  const DarkMode = mode === "dark" ? true : false;
  const [round, setRound] = useState(true);
  const [imgAnimate,setImgAnimate]= useState(true)
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() =>setRound(false),1000);
    setTimeout(() =>setImgAnimate(false),2000);
    setTimeout(() =>setAnimate(false),2800);
  }, [animate]);
  return (
    <div className="w-full flex relative container">
      {DarkMode && <div className="absolute w-[100%] inset-0 gradient-01" />}
      <div className={`image-container ${mode === "dark" && "dark"} ${round && 'un-visible-round'}`}>
        <img src={Rutvik} alt="" className={`image ${imgAnimate && 'un-visible-img'}`}/>
        <div className={`info-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={Hello} alt="" />
          <div>
            <p>Hello, I am</p>
            <h3>Rutvik</h3>
          </div>
        </div>
        <div className={`profession-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <p>Software developer</p>
        </div>
        <div className={`react-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={ReactJS} alt="" />
        </div>
        <div className={`js-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={JavaScript} alt="" />
        </div>
        <div className={`next-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={NextJs} alt="" />
        </div>
        <div className={`angular-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={AngularJs} alt="" />
        </div>
        <div className={`node-card card ${mode === "dark" && "dark"} ${animate && 'un-visible'}`}>
          <img src={NodeJs} alt="" />
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
