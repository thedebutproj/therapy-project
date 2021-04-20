import { siteLogo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <img src={siteLogo}></img>
      </div>
      <div className="navbar-container">
        <div className="navbar-left">Hiii</div>
        <div className="navbar-right">Site</div>
      </div>
    </nav>
  );
};

export default Navbar;
