import React, { useEffect, useState } from "react";
import "./experience.scss";
import ReactJS from "../../../assets/svg-images/reactjs.svg";
import JavaScript from "../../../assets/svg-images/javascript.svg";
import NextJs from "../../../assets/svg-images/nextjs.svg";
import AngularJs from "../../../assets/svg-images/angularjs.svg";
import NodeJs from "../../../assets/svg-images/node.svg";
import Html from "../../../assets/svg-images/html.svg";
import VueJS from "../../../assets/svg-images/vuejs.svg";

const Technologies = () => {
  return (
    <div className="md:w-2/4 w-full">
      <div className="flex gap-6 items-center justify-center mt-10 md:mt-0">
        <div className="tech-card react ">
          <img src={ReactJS} alt="" />
        </div>
        <div className="tech-card node">
          <img src={NodeJs} alt="" />
        </div>
        <div className="tech-card js">
          <img src={JavaScript} alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center my-5">
        <div className="tech-card angular">
          <img src={AngularJs} alt="" />
        </div>
        <div className="tech-card next">
          <img src={NextJs} alt="" />
        </div>
        <div className="tech-card html">
          <img src={Html} alt="" />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <div className="tech-card vuejs">
          <img src={VueJS} alt="" />
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails = ({DarkMode}) => {
  const [first,setFirst] = useState(false);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);

  useEffect(()=>{
    setTimeout(()=>setFirst(true),1000)
    setTimeout(()=>setSecond(true),2000)
    setTimeout(()=>setThird(true),3500)
  })
  return (
    <div className="md:w-2/4 flex w-full md:justify-start justify-center mt-16 md:mt-0">
      <div className="relative">
        <div className={`flex first-line ${first && 'active'}`}>
          <p className={`text-[#323bac] font-semibold tracking-[2px] ${DarkMode && 'text-[#525BCC]'}`}>2022</p>
          <div className="ml-10">
            <h3 className={`text-[18px] font-semibold ${DarkMode && 'text-[#fff]'}`}>
              Senior FullStack Developer
            </h3>
            <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
              DVIJ-INFOTECH
            </p>
          </div>
        </div>
        <div className={`flex second-line ${second && 'active'} mt-12`}>
          <p className={`text-[#323bac] font-semibold tracking-[2px] ${DarkMode && 'text-[#525BCC]'}`}>2021</p>
          <div className="ml-10">
            <div>
              <h3 className={`text-[18px] font-semibold ${DarkMode && 'text-[#fff]'}`}>Frontend Developer</h3>
              <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
                DVIJ-INFOTECH
              </p>
            </div>
            <div>
              <h3 className={`text-[18px] mt-12 font-semibold ${DarkMode && 'text-[#fff]'}`}>
                Mobile-app Developer
              </h3>
              <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
                DVIJ-INFOTECH
              </p>
            </div>
          </div>
        </div>
        <div className={`flex third-line ${third  && 'active'} mt-12`}>
          <p className={`text-[#323bac] font-semibold tracking-[2px] ${DarkMode && 'text-[#525BCC]'}`}>2020</p>
          <div className="ml-9">
            <div>
              <h3 className={`text-[18px] font-semibold ${DarkMode && 'text-[#fff]'}`}>Fullstack Developer</h3>
              <p className="text-[12px] text-[#C6C6C6] tracking-[1.5px]">
                THE PLANETSOFT
              </p>
            </div>
            <div>
              <h3 className={`text-[18px] mt-12 font-semibold ${DarkMode && 'text-[#fff]'}`}>
                Internship Backend Developer
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
      className="w-full flex justify-center items-center flex-col about container md:w-9/12 relative"
    >
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>
          SKILL & EXPERIENCE
        </h1>
      </div>
      <div className="content w-full flex md:mt-10 flex-col md:flex-row">
        <Technologies />
        <ExperienceDetails DarkMode={DarkMode}/>
      </div>
    </div>
  );
};

export default Experience;
