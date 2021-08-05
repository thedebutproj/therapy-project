import { useEffect, useState, useRef } from "react";
import "./ContactUs.css";
import {
  contactUS,
  contactUs_LHSPatch,
  contactUs_PostIt,
  contactUs_LinesGraphic,
  contactUs_Tape,
} from "../../assets";
import { GoogleSpreadsheet } from "google-spreadsheet";

function ContactUs() {
  const sheet = useRef();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sheet.current.addRow([
      formValues.name,
      formValues.email,
      formValues.number,
      formValues.message,
    ]);

    setformValues({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  useEffect(async () => {
    const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email:
        "the-therapy-project@the-debut-project.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeWQBfGSaOabk0\njVI7hAT/efUhJdXLv+VeGy52OwsIryEqGqQn4OImTUJNcPk7YTh1SqChHg6Fa1/m\nvMDki5BKrfyEOX6n8WiRUKctBysHM1bRMYtFmmXJZqtcIU+CUe/PnDGM0746g2IE\nURQ+eKT9P+N6WMz3SCBQTogtRME3ATK+2oeoqoeJfdPnMARa72tAe0YU4Dz44QQJ\nJGUZKCfOxccU5CZWM8d+UI4KySkWZgA7EmgV53tAUCyNnH0tRot8KY0+9U9mCYiN\nTE9XEZz0D3RomS0d73Z7icnyxJz/T3DLAX3nnslKgcKqsZFY+Gj4pdTpdGTBtoqw\n55oUHHt3AgMBAAECggEAAZb/K/VCr9db5q0skDBpJG+DCIwqs1r/4IwBUWqSV8n6\nWUPfNg9J9fx8l+50ciYtvO+84SE+IBTN57EpdqH4FufcSy+Ql/sSg7L9mrQhuHbJ\nflwy+8XrE7SWL9ydwb802y7ESJevp0K+bzCpNV9cuLY1gHr3w9vThzrinyG7luPG\nJU2ECM/TKvoI1aLaC2gri29ivUtNCRGVfyOkUd6DMEddkv+8KhtdtfdHPmXbTpib\nXhgqwALaszzhiofmsws0CKJYN+TXh8l6dnd++VhsXKtMaHntgHDJrpV7y5om2Vp9\n/APrajCOxh2x5uT8Pl7sAwGzwT+/iDFoav0uYrynkQKBgQDOp/ANeP4vxtnEZrS7\n4VXkNrVy/HYG1wNa6gqVbff19viDd6VQel4H9rAe5CucJ3bRvoSZDvjzO+bqiYT/\nZn5JK/hSAKbgbtD9t9fbThHTHU8WMzAHgOo9/eItEgOuASbfpWLxi4YDOmG2qPRP\nA//fpxPsDaEA2TWoMQqWOFhXGwKBgQDEKCqKZjIvw7qzCMYbPmEiCWkpM6IbiFYM\ncFwpV5spwQVYe0bxJ36rjwXljOYHsw2Kzzcb/b+RUZuIRnLUjsu6/AI2e11xDiv+\ny1r+Nl1GsMGBT7xp8bjq7HjHQHuBeJQ0WpGKwtGXHSu2L02Luawh22hfilEkICl/\nhj6F1eom1QKBgESVa4+tFf7ZKbCKvXSVBiJlHbb5nloKxaxIfBa3llFlE3jeHlkl\nI0vVTQITi32Zg098wRji5TAkMzCnTyJL66FxHEpquPdHD8kEWHkJ4dSEp5igiFIV\nMKg+N+/pSJtY+oPCqaGsQl+T4pXyYJJQq3yYQH5Yz5QugiY9kFvmezr9AoGActgZ\nYAJJa9Gqo1uFsTmqYOUlnqvOQ1RlHM9EBih2fdG2sYErndFDxmnsR+NgYi2gxh5f\n45GC8S/YYcbtQCmCei1FlmRP5vsnIvwogCGQJu0hvfXTGCwf2dstM2s7ZCgWjThh\ncd5yG4lGqFm1ixLgBsqQpy8yJnZ2FWWhgXYmqykCgYEAv0WRiKTHIzCezTFWBo8G\n059bz49WRyPPINxrOBgyijHVRoO27/pvimAhQvh4YcPHSCzsUqNq+FoFsMjRyddQ\nFvT13MmRjUhI6uMIzk84bcgeEWYOzvNrl1p3a3lKy/VEoch0FGkkctt4+eTWqp5m\nghQapdiTAZpGgXteewhvTc8=\n-----END PRIVATE KEY-----\n",
    });

    await doc.loadInfo();

    sheet.current = doc.sheetsByIndex[3];

    // await sheet.addRow(["Test", "Test", "Test", "Test"]);

    // console.log(sheet.sheetId);
  }, []);

  return (
    <div className="contactus-container">
      <div className="figure1">
        <img src={contactUs_LHSPatch}></img>
      </div>
      <div className="contactus-text">
        <h1 className="contactus-heading">CONTACT US</h1>
        <p>
          The Debut Project is geared towards potential first-time professional
          help seekers looking to manage their mental health. If you are
          interested to know more about us, would like to share any feedback, or
          even work with us on our mission, please drop a message via the form
          below!
        </p>

        <div className="contactus-form-container">
          <div className="contactus-left">
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <input
                id="number"
                placeholder="Contact Number"
                value={formValues.number}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <textarea
                id="message"
                placeholder="Message"
                value={formValues.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
          <div className="contactus-right">
            {/* <img src={contactUs_PostIt} className="figure2"></img> */}
            <img src={contactUs_LinesGraphic} className="figure3_lines"></img>
            <img src={contactUs_Tape} className="contactus-tape" />

            <div className="contactus-right-text">
              <h2>
                You can also reach out to us
                <br />
                via the following means -
              </h2>
              <ul>
                <li>
                  Email: <a href="#">thedebutproj@gmail.com</a>{" "}
                </li>
                <li>
                  Phone: <a href="#">+91 7218583843</a>{" "}
                </li>

                <li>
                  We request 24 to 48 hours to get back to you.
                  <br />
                  <br />
                  <a href="#">
                    - Please note that this is not an emergency mental health
                    service, and we advise you to click on the "Helplines" link
                    at the foot of this webpage if you require immediate
                    assistance.
                    <br />- If you are a mental health professional looking to
                    be listed on our website, please click on the "For Mental
                    Health Professionals" option at the foot of the webpage.{" "}
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
