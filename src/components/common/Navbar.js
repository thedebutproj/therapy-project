import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      const logoTop = document.getElementsByClassName("navbar-logo")[0];
      const logoList = document.getElementsByClassName("nav-list-logo")[0];
      if (window.scrollY > 0) {
        logoTop.style.display = "none";
        logoList.style.display = "block";
      } else {
        logoTop.style.display = "block";
        logoList.style.display = "none";
      }
    });
  }, []);

  return (
    <nav>
      <div className="navbar-logo">
        <Link to="/">
          <img src={siteLogo}></img>
        </Link>
      </div>
      <div className="navbar-container">
        <li className="nav-items nav-list-logo">
          <Link to="/">
            <img src={siteLogo}></img>
            <span>Debut Project</span>
          </Link>
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/directory">Find Therapist</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="">Blog</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="">Donor/Donees</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/contactus"> Contact Us</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
