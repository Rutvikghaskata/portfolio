import React, { useState } from "react";
import { Navbar, Hero } from "../../component";
import { About, Experience, Resume } from "../Components";
import "./home.scss";

function Home() {
  const [mode, setMode] = useState("light");
  const changeMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={`${mode === "dark" ? "dark-home" : "light-home"} home`}>
      <Navbar mode={mode} changeMode={changeMode} />
      <Hero mode={mode} />
      <About mode={mode} />
      <Experience />
      <Resume />
    </div>
  );
}

export default Home;
