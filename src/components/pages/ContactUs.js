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
        <h1 className="contactus-heading">CONTACT US</h1>
        <p>
        The Debut Project is geared towards potential first-time professional help seekers looking to manage their mental health. If you are interested to know more about us, would like to share any feedback, or even work with us on our mission, please drop a message via the form below! 
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
              <h2>You can also reach out to us 
                <br />
                via the following means -</h2>
              <ul>
                <li>
                  Email: <a href="#">thedebutproj@gmail.com</a>{" "}
                </li>
                <li>
                  Phone: <a href="#">+91 7218583843</a>{" "}
                </li>
                {/* <li>
                  Fax: <a href="#"> +91 98 7654 3210</a>
                </li> */}
                <li>
                We request 24 to 48 hours to get back to you. 
                <br />
                <br />
                <a href="#">

                
                - Please note that this is not an emergency mental health service, and we advise you to click on the "Helplines" link at the foot of this webpage if you require immediate assistance.
                <br />
                - If you are a mental health professional looking to be listed on our website, please click on the "For Mental Health Professionals" option at the foot of the webpage.{" "}
                  {/* <a href="#">
                    {" "}
                    Block A, 4th Floor, Phoenix Primea (Red Brick Building),
                    Plot No - 40 & 41, Financial District, Beside IRDA,
                    Gachibowli, Hyderabad – 500032, Telangana, India.
                  </a> */}
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
