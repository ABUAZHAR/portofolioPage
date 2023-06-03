import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../CSS/navbar.scss";
import About from "../Home/About";
import { useState } from "react";
import Home from "../Home/Home";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  function toggleHandler() {
    setToggle(!toggle);
  }
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <h1>
            <a href="/">ABU AZHAR</a>
          </h1>
        </div>
        <div className="menu-toggle" onClick={toggleHandler}>
          {toggle === true ? <AiOutlineMenuFold /> : <AiOutlineClose />}
        </div>
      </nav>
      <div className={toggle === true ? "toggle" : "list-items"}>
        <ul className="nav-list">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/resume">RESUME</a>
          </li>
          <li>
            <a href="/project">PROJECTS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="null-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
