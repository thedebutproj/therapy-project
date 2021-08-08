import React, { useState } from "react";
import "./Donor.css";

import { benefitsdetailsTAPE, donor_MainIllustration } from "../../assets";
import { writeSheetRow } from "../../api";

const Donor = () => {
  const SHEET_ID = 2014917133;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    would_like: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRadioChange = (e) => {
    if (e.target.checked) {
      setFormValues((formValues) => ({
        ...formValues,
        [e.target.name]: e.target.value,
      }));
    }
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await writeSheetRow(SHEET_ID, [
      formValues.name,
      formValues.email,
      formValues.number,
      formValues.would_like,
      formValues.message,
    ]);

    if (success) {
      window.alert("Form Submission Successful");

      setFormValues({
        name: "",
        email: "",
        number: "",
        would_like: "",
        message: "",
      });
    } else {
      window.alert("Form Submission Unsuccessful");
    }
  };

  return (
    <>
      <div className="donor-main-container">
        <div id="donor-benefits">
          <div className="donor-benefits-heading">
            <p>
              {" "}
              ASSIST<sup>BETA</sup>
            </p>
          </div>
          <div className="donor-benefits-content">
            <img id="assist-tape" src={benefitsdetailsTAPE} alt="" />
            <p>
              For most, the decision to seek professional help for their mental
              wellbeing is a daunting task. While there are many factors at
              play, the two major variables in the equation - especially for
              students and young professionals - are information asymmetry and
              financial constraints. While we strongly believe that through our
              curated content and our verified directory, we can address the
              former, we're also passionate about trying to tackle the latter.
            </p>
            <p>
              Via Assist<sup>BETA</sup>, The Debut Project would like to help
              first-time therapy seekers gain access to the mental healthcare
              they deserve, by providing ways to obtain monetary aid for their
              sessions. If you are a student, young-professional, or someone who
              does not have the resources to pay fully for professional help,
              please reach out to us via the form at the bottom of this page.
            </p>
            <p>
              <i>
                While we are launching this humble philanthropic initiative for
                students and graduates of IIT Roorkee only, we look forward to
                expanding the scope this idea soon. Hence, we also welcome our
                visitors to discuss and consider contributing to this cause, and
                hence widen the scope of prospective beneficiaries.
              </i>
            </p>
          </div>
        </div>
        <div id="donor-what-can-you-do">
          <div className="what-can-you-do-heading">
            <p>What can you do?</p>
          </div>
          <div className="what-can-you-do-content">
            <div>
              <h1>Pledge</h1>
              <p>
                Borrow for your first session today, and pledge to 'pay back' by
                supporting an individual's session in the future.
              </p>
            </div>
            <div className="donor-content-line"></div>
            <div className="donor-content-line-2"></div>

            <div>
              <h1>Receive</h1>
              <p>
                Try therapy for 'free'! Accept a donation from our team/our
                partner donors to pay for your first session.
              </p>
            </div>
            <div className="donor-content-line"></div>
            <div className="donor-content-line-2"></div>

            <div>
              <h1>Donate</h1>
              <p>
                Support professional care seekers by fulfilling requests of
                financial assistance, or contribute towards the maintenance of
                this site.
              </p>
            </div>
          </div>
        </div>
        <div id="donor-register-form">
          <div className="donor-register-form-left">
            <div className="donor-register-form-heading">
              <h1>Register Your Interest Below</h1>
            </div>
            <div className="donor-register-form-fill">
              <form id="main-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  id="number"
                  placeholder="Contact Number"
                  value={formValues.number}
                  onChange={handleFormChange}
                  required
                />
                {/* <input type="text" placeholder="I would like to..(Pledge, Receive, Donate)" /> */}
                <div id="choice">
                  <p>I would like to</p>
                  <div id="form-div">
                    <div>
                      <input
                        type="radio"
                        id="pledge"
                        name="would_like"
                        value="Pledge"
                        checked={formValues.would_like === "Pledge"}
                        onChange={handleRadioChange}
                        required
                      />
                      <label htmlFor="pledge">Pledge</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="receive"
                        name="would_like"
                        value="Receive"
                        checked={formValues.would_like === "Receive"}
                        onChange={handleRadioChange}
                        required
                      />
                      <label htmlFor="receive">Receive</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="donate"
                        name="would_like"
                        value="Donate"
                        checked={formValues.would_like === "Donate"}
                        onChange={handleRadioChange}
                        required
                      />
                      <label htmlFor="donate">Donate</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="other"
                        name="would_like"
                        value="Other"
                        checked={formValues.would_like === "Other"}
                        onChange={handleRadioChange}
                        required
                      />
                      <label htmlFor="other">Other</label>
                    </div>
                  </div>
                </div>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  value={formValues.message}
                  placeholder="Message for our team"
                  onChange={handleFormChange}
                  required
                ></textarea>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="donor-register-form-right">
            <img src={donor_MainIllustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Donor;
