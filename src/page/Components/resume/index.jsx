import React from "react";
import Rutvik from "../../../assets/svg-images/rutvik.png";
import MyResume from "../../../assets/document/rutikghaskata.pdf";
import "./resume.scss";

const Resume = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="resume"
      className="w-full flex justify-center items-center flex-col about container md:w-9/12 relative"
    >
      {DarkMode && (
        <div className="absolute w-[60%] h-[50%] bottom-0 right-0 gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>RESUME</h1>
      </div>
      <div className="content w-full flex md:mt-10 flex-col md:flex-row">
        <div className="md:w-2/5 md:flex hidden w-full  justify-start">
          <img src={Rutvik} alt="" className="image" />
        </div>
        <div className="md:w-3/5 w-full p-5">
          <h1
            className={`font-semibold text-[25px] mt-5 md:text-star ${
              DarkMode && "text-white"
            }`}
          >
            <span className={`text-[#323bac]`}>HELLO,</span> I'm Rutvik Ghaskata
          </h1>
          <p
            className={`font-bold text-black mt-5 text-[50px] font-["Josefin Sans"] md:tracking-[.5px] ${
              DarkMode && "text-[#fff]"
            }`}
          >
           Software Developer
          </p>
          <p
            className={`text-[#ccc] mt-3 mb-10 text-justify	md:tracking-[.5px] ${
              DarkMode && "text-[#888]"
            }`}
          >
           A software developer is a professional who is responsible for designing and building computer programs
          </p>
          <a className="bg-[#323BAC] text-white text-[15px] px-7 py-2 rounded-full button" href={MyResume} target="_blank" rel="noreferrer">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
