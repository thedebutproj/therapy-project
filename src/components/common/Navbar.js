import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  const navbar = useRef();
  const navListLogo = useRef();

  useEffect(() => {
    let sticky = navbar.current.offsetTop;

    document.addEventListener("scroll", (event) => {
      // console.log(navbar);

      // const logoTop = document.getElementsByClassName("navbar-logo")[0];
      if (window.pageYOffset >= sticky) {
        navbar.current.classList.add("sticky");
        // logoTop.style.display = "none";
        navListLogo.current.style.display = "block";
      } else {
        // logoTop.style.display = "block";
        navbar.current.classList.remove("sticky");
        navListLogo.current.style.display = "none";
      }
    });
  }, []);

  return (
    <>
      <div className="navbar-logo">
        <Link to="/">
          <img src={siteLogo}></img>
        </Link>
      </div>

      <nav ref={navbar}>
        <li className="nav-items nav-list-logo" ref={navListLogo}>
          <Link to="/">
            <img src={siteLogo}></img>
            <span>The Debut Project</span>
          </Link>
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/directory">Directory</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/blog">Blog</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/donor">
            Assist<sup style={{ fontSize: "x-small" }}>BETA</sup>
          </Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="/contactus"> Contact Us</Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
