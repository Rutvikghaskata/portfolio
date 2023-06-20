import React from "react";
import "./qualification.scss";

const Experience = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="qualification"
      className="w-full flex justify-center items-center flex-col qualification container md:w-9/12 relative"
    >
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>
          QUALIFICATION
        </h1>
      </div>
      <div className="w-full flex mt-10 flex-col content items-center relative">
         <div className={`bg-white rounded-[14px] py-[22px] pl-[20px] pr-[50px] card md:w-[350px] ${DarkMode && "dark"}`}>
           <div className="flex  items-center">
             <h1 className="font-bold text-[16px]">Higher-Education</h1>
             <span className="text-[#323bac] text-[13px] font-semibold pl-1">(2016 - 2019)</span>
           </div>
           <p className="text-[12px] text-[#B7B6B6] tracking-[2px] mt-2">-Gurukl vidhyapith kumar vidhyalaya</p>
           <div className="flex items-center mt-1">
             <span className="text-[#909090] text-[13px] pl-1">10th - (67.00%)</span>
             <span className="text-[#909090] text-[13px] pl-4">12th - (78.00%)</span>
           </div>
         </div>
      </div>
      <div className="w-full flex mt-12 flex-col content items-center relative">
         <div className={`bg-white rounded-[14px] py-[22px] pl-[20px] pr-[50px] card md:w-[350px] ${DarkMode && "dark"}`}>
           <div className="flex  items-center">
             <h1 className="font-bold text-[16px]">Bachelor-Education</h1>
             <span className="text-[#323bac] text-[13px] font-semibold pl-1">(2019 - 2022)</span>
           </div>
           <p className="text-[12px] text-[#B7B6B6] tracking-[2px] mt-2">-Veer Narmad University (VNSGU)</p>
           <div className="flex items-center mt-1">
             <span className="text-[#909090] text-[13px] pl-1">90.20%(9.2 CGPA)</span>
           </div>
         </div>
      </div>
      <div className="w-full flex mt-12 flex-col content items-center">
         <div className={`bg-white rounded-[14px] py-[22px] pl-[20px] pr-[50px] shadow-2xl card md:w-[350px] ${DarkMode && "dark"}`}>
           <div className="flex  items-center">
             <h1 className="font-bold text-[16px]">Master-Education</h1>
             <span className="text-[#323bac] text-[13px] font-semibold pl-1">(2022 - Present)</span>
           </div>
           <p className="text-[12px] text-[#B7B6B6] tracking-[2px] mt-2">-Jain University (Banglore)</p>
           <div className="flex items-center mt-1">
             <span className="text-[#909090] text-[13px] pl-1">...</span>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Experience;
