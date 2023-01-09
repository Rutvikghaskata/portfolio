import React from "react";
import "./contact.scss";
import Mail from '../../../assets/svg-images/mail.svg'
import Mobile from '../../../assets/svg-images/mobile.svg'
import TextInput from "../InputText";

const Contact = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center flex-col qualification container md:w-9/12 relative"
    >
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>
        CONTACT
        </h1>
      </div>
      <div className="w-full flex md:mt-20 mt-10 flex-col md:flex-row content items-center justify-center md:gap-10 gap-5 relative">
         <div className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[55px] ${DarkMode && "dark"} contact-card`}>
           <div className="flex  items-center">
             <img src={Mail} alt="" className="h-[40px]"/>
             <span className="text-[#323bac] text-[15px] font-semibold pl-3">rutvikghaskata72@gmail.com</span>
           </div>
         </div>
         <div className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[155px] ${DarkMode && "dark"} contact-card`}>
           <div className="flex  items-center">
             <img src={Mobile} alt="" className="h-[40px]"/>
             <span className="text-[#323bac] text-[15px] font-semibold pl-3">+917984030827</span>
           </div>
         </div>
      </div>
      <div className="flex md:flex-row md:gap-0 gap-10 flex-col w-full my-10 justify-between items-center">
        <div className="md:w-[30%] w-[70%]">
          <TextInput placeholder="NAME"/>
        </div>
        <div className="md:w-[30%] w-[70%]">
          <TextInput placeholder="EMAIL ADDRESS"/>
        </div>
        <div className="md:w-[30%] w-[70%]">
          <TextInput placeholder="SUBJECT"/>
        </div>
      </div>
      <button className="text-[#323bac] font-semibold underline">SUBMIT</button>
    </div>
  );
};

export default Contact;
