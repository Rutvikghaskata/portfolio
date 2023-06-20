import React, { useEffect, useState } from "react";
import "./experience.scss";
import ReactJS from "../../../assets/svg-images/reactjs.svg";
import JavaScript from "../../../assets/svg-images/javascript.svg";
import NextJs from "../../../assets/svg-images/nextjs.svg";
import NextJsWhite from "../../../assets/svg-images/nextjs-white.svg";
import AngularJs from "../../../assets/svg-images/angularjs.svg";
import NodeJs from "../../../assets/svg-images/node.svg";
import Html from "../../../assets/svg-images/html.svg";
import CSS from "../../../assets/svg-images/css.svg";
import GitHub from "../../../assets/svg-images/github.svg";
import SCSS from "../../../assets/svg-images/scss.svg";

const Technologies = ({ DarkMode }) => {
  return (
    <div className="md:w-2/4 w-full">
      <div className="flex gap-6 items-center justify-center mt-10 md:mt-0">
        <div className="tech-card react" title="Reactjs & React-Native">
          <img src={ReactJS} alt="" />
        </div>
        <div className="tech-card node" title="NodeJs">
          <img src={NodeJs} alt="" />
        </div>
        <div className="tech-card js" title="Javascript">
          <img src={JavaScript} alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center my-5">
        <div className="tech-card angular" title="Angular">
          <img src={AngularJs} alt="" />
        </div>
        <div
          className={`tech-card next ${DarkMode && "white-icon"}`}
          title="nextjs"
        >
          <img src={DarkMode ? NextJsWhite : NextJs} alt="" />
        </div>
        <div className="tech-card html" title="Html">
          <img src={Html} alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <div className="tech-card css" title="Css">
          <img src={CSS} alt="" />
        </div>
        <div className="tech-card scss" title="Scss">
          <img src={SCSS} alt="" />
        </div>
        <div className="tech-card github" title="Github">
          <img src={GitHub} alt="" />
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails = ({ DarkMode }) => {
  const [first, setFirst] = useState(false);
  const [third, setThird] = useState(false);

  useEffect(() => {
    setTimeout(() => setFirst(true), 1000);
    setTimeout(() => setThird(true), 2000);
  });
  return (
    <div className="md:w-2/4 flex w-full md:justify-start justify-center mt-16 md:mt-0">
      <div className="relative">
        <div className={`flex first-line ${first && "active"}`}>
          <p
            className={`text-[#323bac] font-semibold tracking-[2px] ${
              DarkMode && "text-[#525BCC]"
            }`}
          >
            2023
          </p>
          <div className="ml-10">
            <h3
              className={`text-[18px] font-semibold ${
                DarkMode && "text-[#fff]"
              }`}
            >
              FullStack Developer
            </h3>
            <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
              DVIJ-INFOTECH
            </p>
          </div>
        </div>
        <div className={`flex third-line ${third && "active"}`}>
          <p
            className={`text-[#323bac] font-semibold tracking-[2px] ${
              DarkMode && "text-[#525BCC]"
            }`}
          >
            2022
          </p>
          <div className="ml-10">
            <div>
              <h3
                className={`text-[18px] font-semibold ${
                  DarkMode && "text-[#fff]"
                }`}
              >
                Frontend Developer
              </h3>
              <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
                DVIJ-INFOTECH
              </p>
            </div>
          </div>
        </div>
        <div className={'flex mt-20'}>
          <p
            className={`text-[#323bac] font-semibold tracking-[2px] ${
              DarkMode && "text-[#525BCC]"
            }`}
          >
            2021
          </p>
          <div className="ml-10">
            <div>
              <h3
                className={`text-[18px] font-semibold ${
                  DarkMode && "text-[#fff]"
                }`}
              >
                Backend Developer
              </h3>
              <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
                THE PLANETSOFT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="experience"
      className="w-full flex justify-center items-center flex-col experience container md:w-9/12 relative"
    >
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>
          SKILL & EXPERIENCE
        </h1>
      </div>
      <div className="w-full flex md:mt-10 flex-col md:flex-row content">
        <Technologies DarkMode={DarkMode} />
        <ExperienceDetails DarkMode={DarkMode} />
      </div>
    </div>
  );
};

export default Experience;
