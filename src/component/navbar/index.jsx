import React, { useState } from "react";
import "./navbar.scss";
import LightLogo from "../../assets/svg-images/light-logo.svg";
import DarkLogo from "../../assets/svg-images/dark-logo.svg";
import Dark from "../../assets/svg-images/moon.svg";
import Light from "../../assets/svg-images/sun.svg";
import LightMenu from "../../assets/svg-images/light-menu.svg";
import DarkMenu from "../../assets/svg-images/dark-menu.svg";

const LINKS = [
  { name: "HOME", link: "home" },
  { name: "ABOUT", link: "aout" },
  { name: "EXPERIENCE", link: "experience" },
  { name: "RESUME", link: "resume" },
  { name: "CONTACT", link: "contact" },
];
const NavLink = ({ name, className, onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      {name}
    </li>
  );
};

const Links = (mode) => {
  const [active, setActive] = useState(0);
  return LINKS.map((link, index) => {
    return (
      <NavLink
        name={link.name}
        className={`${active === index ? "active" : ""} ${
          mode === "dark" && "dark"
        }`}
        key={index}
        onClick={() => setActive(index)}
      />
    );
  });
};
const Navbar = ({ mode, changeMode }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className={`w-full flex text-black header-container`}>
      <div
        className={`container flex items-center justify-between h-full ${
          mode === "dark" && "dark"
        }`}
      >
        <img
          src={mode === "dark" ? DarkLogo : LightLogo}
          alt=""
          className="logo"
        />
        <ul className="flex gap-10 navlink">
          <Links mode={mode} />
        </ul>

        <div className="flex gap-4">
          <div
            className={`round-container menu flex items-center justify-center ${
              mode === "dark" && "dark"
            }`}
            onClick={() => setActiveMenu(true)}
          >
            <img src={mode === "light" ? LightMenu : DarkMenu} alt="" />
          </div>
          <div
            className={`round-container flex items-center justify-center ${
              mode === "dark" && "dark"
            }`}
            onClick={changeMode}
          >
            <img src={mode === "light" ? Dark : Light} alt="" />
          </div>
        </div>
      </div>
      <div className={`side-menu ${activeMenu && "active"}`}>
        <div onClick={() => setActiveMenu(false)}>close</div>
        <div className="flex items-center justify-center w-full">
          <ul className="gap-10">
            <Links mode={mode} className={"hello"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
