import React, { useEffect, useState } from "react";
import "./navbar.scss";
import LightLogo from "../../assets/svg-images/light-logo.svg";
import DarkLogo from "../../assets/svg-images/dark-logo.svg";
import Dark from "../../assets/svg-images/moon.svg";
import Light from "../../assets/svg-images/sun.svg";
import LightMenu from "../../assets/svg-images/light-menu.svg";
import DarkMenu from "../../assets/svg-images/dark-menu.svg";
import CloseBlue from "../../assets/svg-images/close-blue.svg";
import CloseWhite from "../../assets/svg-images/close-white.svg";
import { Link } from "react-scroll";
// import NavWhiteLine from "../../assets/svg-images/nav-line-white.svg";

const LINKS = [
  { name: "HOME", link: "home" },
  { name: "ABOUT", link: "about" },
  { name: "EXPERIENCE", link: "experience" },
  { name: "RESUME", link: "resume" },
  { name: "CONTACT", link: "contact" },
];
const NavLink = ({ name, className, onClick, link }) => {
  return (
    // <div className="flex items-center flex-col nav-link">
    <Link className={className} onClick={onClick} to={link} spy={true} smooth={true}>
      {name}
    </Link>
    //   <div style={{ height: 10, width: 80 }}>
    //     <img src={NavWhiteLine} alt="" className="nav-line" />
    //   </div>
    // </div>
  );
};

const Links = ({ className }) => {
  const [active, setActive] = useState(0);
  return LINKS.map((link, index) => {
    return (
      <NavLink
        name={link.name}
        className={`${active === index ? "activeTab" : ""} ${className}`}
        key={index}
        onClick={() => setActive(index)}
        link={link.link}
      />
    );
  });
};
const Navbar = ({ mode, changeMode }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const DarkMode = () => {
    return mode === "dark" ? true : false;
  };
  useEffect(() => {
    setAnimate(true);
  }, [animate]);
  return (
    <div
      className={`w-full flex text-black header-container ${
        DarkMode() && "dark"
      }`}
    >
      <div
        className={`container flex items-center justify-between h-full ${
          DarkMode() && "dark"
        }  ${animate && "animate"}`}
      >
        <Link to={'home'} spy={true} smooth={true}>
          <img
            src={DarkMode() ? DarkLogo : LightLogo}
            alt=""
            className="logo cursor-pointer"
          /> 
        </Link>
        <ul className="flex gap-10 navlink">
          <Links className={DarkMode() && "dark"} />
        </ul>

        <div className="flex gap-4">
          <div
            className={`round-container menu flex items-center justify-center ${
              DarkMode() && "dark"
            }`}
            onClick={() => setActiveMenu(true)}
          >
            <img src={mode === "light" ? LightMenu : DarkMenu} alt="" />
          </div>
          <div
            className={`round-container flex items-center justify-center ${
              DarkMode() && "dark"
            }`}
            onClick={changeMode}
          >
            <img src={mode === "light" ? Dark : Light} alt="" />
          </div>
        </div>
      </div>
      <div
        className={`side-menu ${activeMenu && "activeTab"} ${
          DarkMode() && "dark"
        }`}
      >
        <div onClick={() => setActiveMenu(false)} className="close-btn">
          <img src={DarkMode() ? CloseWhite : CloseBlue} alt="" />
        </div>
        <div className="flex items-center justify-center w-full">
          <ul className={`gap-10 ${DarkMode() && "dark"}`}>
            <Links mode={mode} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
