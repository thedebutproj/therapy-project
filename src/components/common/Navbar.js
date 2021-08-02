import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  const navbarLogo = useRef();
  const navbar = useRef();
  const navListLogo = useRef();

  const navbarMenu = useRef();
  const navbarMenuIcon = useRef();
  const navbarMenuList = useRef();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const changeMenuIcon = () => {
    if (!isMenuVisible) {
      console.log(isMenuVisible);
      navbarMenuIcon.current.classList.add("navbar-menu-icon-change");
      navbarMenuList.current.style.display = "block";
    } else {
      navbarMenuIcon.current.classList.remove("navbar-menu-icon-change");
      navbarMenuList.current.style.display = "none";
    }

    // console.log(isMenuVisible);
    setIsMenuVisible((value) => {
      return !value;
    });

    // setIsMenuVisible(true);
  };

  useEffect(() => {
    let sticky = navbar.current.offsetTop;

    document.addEventListener("scroll", (e) => {
      if (window.pageYOffset >= sticky) {
        navbar.current.classList.add("sticky");
        navListLogo.current.style.display = "block";
        // navbarLogo.current.style.display = "none";
      } else {
        navbar.current.classList.remove("sticky");
        navListLogo.current.style.display = "none";
        // navbarLogo.current.style.display = "block";
      }
    });

    // document.addEventListener("click", (e) => {
    //   if (navbarMenu.current && !navbarMenu.current.contains(e.target)) {
    //     if (!isMenuVisible) {
    //       console.log(navbarMenuList.current.style.display);
    //     }
    //     changeMenuIcon();
    //   }
    // });
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-logo" ref={navbarLogo}>
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

      <div className="navbar-menu-container" ref={navbarMenu}>
        <div
          className="navbar-menu-icon-container"
          ref={navbarMenuIcon}
          onClick={changeMenuIcon}
        >
          <div className="navbar-menu-icon-bar1"></div>
          <div className="navbar-menu-icon-bar2"></div>
          <div className="navbar-menu-icon-bar3"></div>
        </div>

        <ul className="navbar-menu-list" ref={navbarMenuList}>
          <li>
            {" "}
            <Link to="/" onClick={changeMenuIcon}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/directory" onClick={changeMenuIcon}>
              Directory
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/blog" onClick={changeMenuIcon}>
              Blog
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/donor" onClick={changeMenuIcon}>
              Assist<sup style={{ fontSize: "x-small" }}>BETA</sup>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contactus" onClick={changeMenuIcon}>
              {" "}
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
