import { useState } from "react";
import "./ContactUs.css";
import {
  contactUS,
  contactUs_LHSPatch,
  contactUs_PostIt,
  contactUs_LinesGraphic,
} from "../../assets";

function ContactUs() {
  const [formValues, setformValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setformValues((formValues) => ({
      ...formValues,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="contactus-container">
      <div className="figure1">
        <img src={contactUs_LHSPatch}></img>
      </div>
      <div className="contactus-text">
        <h1 className="contactus-heading">Contact Us</h1>
        <p>
          Do you have an idea or social enterprise you think we need to know
          about? Got any questions regarding our work or process? Are you
          interested in working or interning with us? Get in touch.
        </p>

        <div className="contactus-form-container">
          <div className="contactus-left">
            <form>
              <input
                id="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              ></input>
              <br></br>

              <input
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              ></input>
              <br></br>

              <input
                id="number"
                placeholder="Contact Number"
                value={formValues.number}
                onChange={handleChange}
              ></input>
              <br></br>

              <textarea
                id="message"
                placeholder="Message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>

              <button>SEND MESSAGE</button>
            </form>
          </div>
          <div className="contactus-right">
            <img src={contactUs_PostIt} className="figure2"></img>
            <img src={contactUs_LinesGraphic} className="figure3_lines"></img>

            <div className="contactus-right-text">
              <h2>Please contact us for more information</h2>
              <ul>
                <li>
                  Email: <a href="#">thedebut@gmail.com</a>{" "}
                </li>
                <li>
                  Phone: <a href="#">+91 98 7654 3210</a>{" "}
                </li>
                <li>
                  Fax: <a href="#"> +91 98 7654 3210</a>
                </li>
                <li>
                  Address:{" "}
                  <a href="#">
                    {" "}
                    Block A, 4th Floor, Phoenix Primea (Red Brick Building),
                    Plot No - 40 & 41, Financial District, Beside IRDA,
                    Gachibowli, Hyderabad – 500032, Telangana, India.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
