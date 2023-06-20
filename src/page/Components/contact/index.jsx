import React, { useState } from "react";
import "./contact.scss";
import Mail from "../../../assets/svg-images/mail.svg";
import Mobile from "../../../assets/svg-images/mobile.svg";
import TextInput from "../InputText";

const Contact = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  const [notification, setNotification] = useState(false);
  const [timeOutId, setTimeOutId] = useState(null);
  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center flex-col qualification container md:w-9/12 relative"
    >
      <div className={`Notification ${notification && "active"}`}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setNotification(false);
            clearTimeout(timeOutId);
          }}
        >
          <g clip-path="url(#clip0_112_2)">
            <path
              d="M62.8991 2.48924e-05C62.6218 0.00855823 61.1941 -0.198397 61 2.54065e-06L36.6165 25.8774C35.5711 26.88 37.1178 28.431 38.1226 27.3856L64 3C64.6933 2.3216 63.8847 2.48924e-05 62.897 2.48924e-05H62.8991ZM26.641 36.2667C26.3637 36.2752 26.1077 36.3904 25.9157 36.5867L3.72827e-05 61C-1.03676 61.9963 2.00373 65.0368 3 64L27.409 38.08C28.1023 37.4123 27.6074 36.2667 26.641 36.2667ZM2.00001 6.82548e-05C1.78719 -0.000363366 1.00001 6.83665e-05 0.500009 0.500068C8.52346e-06 1.00007 8.55327e-06 2.00007 8.55327e-06 2.00007C-0.0798225 2.19735 -4.80711e-05 3.00007 -4.80711e-05 3.00007C-0.153281 2.85237 0.0442438 3.20823 -4.80711e-05 3.00007L61 64.0001C61.0967 64.1082 62.5 64 62.5 64C62.6316 64.0611 62.7856 64.0207 62.9307 64.0247C63.0757 64.0288 63.2201 64.0032 63.3549 63.9496C63.4897 63.8959 63.6122 63.8153 63.7148 63.7127C63.8174 63.6101 63.898 63.4877 63.9516 63.3529C64.0052 63.218 64.0308 63.0737 64.0268 62.9286C64.0227 62.7836 64.061 62.6316 63.9999 62.5C63.9999 62.5 64.0598 61.0968 63.9517 61.0001L2.99995 -4.64171e-06C2.90026 -0.102848 1.49996 1.30311e-05 1.49996 1.30311e-05C1.36801 -0.0556982 2.14324 -0.000211949 2.00001 6.82548e-05Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_112_2">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Thanks for contacting me! I will get in touch with you shortly.</p>
      </div>
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>CONTACT</h1>
      </div>
      <div className="w-full flex md:mt-20 my-10 flex-col md:flex-row content items-center justify-center md:gap-10 gap-5 relative">
        <div
          className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[55px] ${
            DarkMode && "dark"
          } contact-card`}
        >
          <div className="flex  items-center">
            <img src={Mail} alt="" className="h-[40px]" />
            <span className="text-[#323bac] text-[15px] font-semibold pl-3">
              rutvikghaskata72@gmail.com
            </span>
          </div>
        </div>
        <div
          className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[155px] ${
            DarkMode && "dark"
          } contact-card`}
        >
          <div className="flex  items-center">
            <img src={Mobile} alt="" className="h-[40px]" />
            <span className="text-[#323bac] text-[15px] font-semibold pl-3">
              +917984030827
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row md:gap-0 gap-10 flex-col w-full my-20 justify-between items-center">
        <div className="md:w-[30%] w-[80%]">
          <TextInput placeholder="NAME" />
        </div>
        <div className="md:w-[30%] w-[80%]">
          <TextInput placeholder="EMAIL ADDRESS" />
        </div>
        <div className="md:w-[30%] w-[80%]">
          <TextInput placeholder="SUBJECT" />
        </div>
      </div>
      <div className="flex md:w-[100%] w-[80%]">
        <textarea
          placeholder="YOUR MESSAGE HERE"
          rows="5"
          className="w-full outline-none bg-transparent border-b border-[#323bac20] hover:border-[#323bac] focus:border-[#323bac] pl-1 text-[#323bac]"
        />
      </div>
      <button
        className="text-[#323bac] font-semibold md:mt-20 mt-10 mb-20 underline"
        onClick={() => {
          setNotification(true);
          const timeOutId = setTimeout(() => setNotification(false), 5000);
          setTimeOutId(timeOutId);
        }}
      >
        SUBMIT MESSAGE
      </button>
    </div>
  );
};

export default Contact;
