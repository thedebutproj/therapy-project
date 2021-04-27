import { Link } from "react-router-dom";
import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <img src={siteLogo}></img>
      </div>
      <div className="navbar-container">
        <li className="nav-items">
          {" "}
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-items">
          {" "}
          <Link to="">Articles</Link>{" "}
        </li>
        <li className="nav-items">
          {" "}
          <Link to="">Find Link Therapist</Link>{" "}
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
