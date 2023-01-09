import React from "react"
import "./footer.scss";

const Footer = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="footer"
      className={`w-full  h-[100px] ${!DarkMode ? "bg-[#323bac]" : "bg-[#000000]" } mt-10`}
    >

    </div>
  );
};

export default Footer;
