import { useState } from "react";
import "./ContactUs.css";

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
      <h1>Contact Us</h1>
      <h3>
        Do you have an idea or social enterprise you think we need to know
        about? Got any questions regarding our work or process? Are you
        interested in working or interning with us? Get in touch.
      </h3>

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

            <button>Submit</button>
          </form>
        </div>
        <div className="contactus-right">
          <h3>
            Address: Block A, 4th Floor, Phoenix Primea (Red Brick Building),
            Plot No - 40 & 41, Financial District, Beside IRDA, Gachibowli,
            Hyderabad – 500032, Telangana, India.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
