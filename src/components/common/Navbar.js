import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  const navbar = useRef();
  const navListLogo = useRef();

  useEffect(() => {
    let sticky = navbar.current.offsetTop;
    console.log(sticky);
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
      </nav>
    </>
  );
};

export default Navbar;
