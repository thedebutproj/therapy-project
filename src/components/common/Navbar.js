import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <img src={siteLogo}></img>
      </div>
      <div className="navbar-container">
        <li className="nav-items"> <a href=""> Home</a></li>
        <li className="nav-items"> <a href="">Articles</a> </li>
        <li className="nav-items"> <a href="">Find a Therapist</a> </li>
        <li className="nav-items"> <a href="">Blog</a> </li>
        <li className="nav-items"> <a href="">Donor/Donees</a> </li>
        <li className="nav-items"> <a href=""> Contact Us</a></li>
      </div>
    
    </nav>
  );
};

export default Navbar;
