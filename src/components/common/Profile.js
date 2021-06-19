import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWindowScroll } from "react-use";
import "./Profile.css";
import { Link } from "react-router-dom";

import { fetchSheetRow } from "../../api";
// test
import {
  profile_LogoInstagram,
  profile_LogoLinkedin,
  profile_LogoTwitter,
  profile_LogoWebsite,
  profile_Section_ScheduleDaysOFF,
  profile_Section_ScheduleIcon,
  profile_Section_ContactLocation,
  profile_SquigglyPointer,
  profile_JumpToArrow,
  profile_Section_ContactPostit,
  profile_Section_SchedulePostit,
  profile_Section_PricingPostit,
  profile_Section_BackgroundPostit,
  profile_Section_SessionPostit,
  profile_Section_AddInfoPostit,
  profile_YellowNameBlob,
} from "../../assets";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    workingTime: "",
    notesOnAvailability: "",
    medium: "",
    typicalSessionCost: "",
    notesOnFinancialAssistance: "",
    qualifications: "",
    typeOfProfessional: "",
    experience: "",
    languages: "",
    yourFirstSession: "",
    typicalSessionLength: "",
    affiliations: "",
    targetDemographic: "",
    evaluationsAdministered: "",
    areaOfExpertise: "",
  });

  // const {
  //   name,
  //   contact,
  //   email,
  //   location,
  //   workingTime,
  //   notesOnAvailability,
  //   medium,
  //   typicalSessionCost,
  //   notesOnFinancialAssistance,
  //   qualifications,
  //   typeOfProfessional,
  //   experience,
  //   languages,
  //   yourFirstSession,
  //   typicalSessionLength,
  //   affiliations,
  //   targetDemographic,
  //   evaluationsAdministered,
  //   areaOfExpertise,
  // } = user;

  useEffect(() => {
    fetchSheetRow(id).then((rowData) => {
      setUser({
        ...user,
        name: rowData["Full Name"],
        contact: rowData["Contact - Phone Number"],
        email: rowData["Contact - Email ID"],
        location: rowData["Location"],
        workingTime: rowData["Hours of Availability"],
        notesOnAvailability: rowData["Notes on Availability"],
        medium: rowData["Medium"],
        typicalSessionCost: rowData["Typical Session Cost"],
        notesOnFinancialAssistance: rowData["Notes on Financial Assistance"],
        qualifications: rowData["Qualifications"],
        typeOfProfessional: rowData["Type of Professional"],
        experience: rowData["Experience"],
        languages: rowData["Languages"],
        yourFirstSession: rowData["Your First Session"],
        typicalSessionLength: rowData["Typical Session Length"],
        affiliations: rowData["Affiliations"],
        targetDemographic: rowData["Target Demographic"],
        evaluationsAdministered: rowData["Evaluations Administered"],
        areaOfExpertise: rowData["Areas of Expertise"],
      });
    });
  }, []);

  const handleDropdown = () => {
    const element = document.getElementById("dropdownID");
    const buttonElement = document.getElementById("jump-to-ID");

    element.classList.remove("hideAnything");
    element.classList.add("flexAnything");
    buttonElement.classList.remove("flexAnything");
    buttonElement.classList.add("hideAnything");
  };

  const handleDropdown2 = () => {
    const element = document.getElementById("dropdownID");
    const buttonElement = document.getElementById("jump-to-ID");
    element.classList.remove("flexAnything");
    element.classList.add("hideAnything");
    buttonElement.classList.remove("hideAnything");
    buttonElement.classList.add("flexAnything");
  };

  // const scrollFunction = () => {
  //   if (window.pageYOffset > 20) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // };
  // window.onscroll = () => {
  //   scrollFunction();
  // };

  const scrollFunction = () => {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // window.onscroll = () => {
  //   scrollFunction();
  // }
  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="profile-main-container">
      {/* <div className="profile-container"> */}
      <div className="profile-header-container">
        <div className="profile-to-directory">
          <a href="/directory">
            {/* <Link to='/directory'> */}
            <ion-icon
              name="caret-down-outline"
              data-filter-name="profession"
            ></ion-icon>
            <span>DIRECTORY</span>
            {/* </Link> */}
          </a>
        </div>
        <div className="profile-user-main">
          <img id="profile-user-main-back-img" src={profile_YellowNameBlob} alt="" />
          <div className="profile-name">{user.name}</div>
          <div className="profile-icons">
            <a>
              {" "}
              <img src={profile_LogoInstagram} alt="" />
            </a>
            <a>
              {" "}
              <img src={profile_LogoLinkedin} alt="" />
            </a>
            <a>
              {" "}
              <img src={profile_LogoTwitter} alt="" />
            </a>
            <a>
              {" "}
              <img src={profile_LogoWebsite} alt="" />
            </a>

            {/* icons */}
          </div>
        </div>
          <div>
            <button
              className="jump-to"
              id="jump-to-ID"
              onClick={handleDropdown}
            >
              <p>JUMP TO</p>
              {/* <img src={profile_JumpToArrow} alt="" /> */}

              <ion-icon
                name="caret-down-outline"
                data-filter-name="profession"
              ></ion-icon>
            </button>
            <div id="dropdownID" onClick={handleDropdown2}>
              <div className="jump-to-container">
                <button className="jump-to-two">
                  <p>JUMP TO</p>
                  {/* <img src={profile_JumpToArrow} alt="" /> */}

                  <ion-icon
                    name="caret-down-outline"
                    data-filter-name="profession"
                  ></ion-icon>
                </button>
                <div>
                  <a href="#profile-contact-main">
                    <div></div>
                    <p>Contact</p>
                  </a>
                  <a href="#profile-details-main">
                    <div></div>
                    <p>Background</p>
                  </a>
                  <a href="#profile-time-main">
                    <div></div>
                    <p>Schedule</p>
                  </a>
                  <a href="#profile-session-main">
                    <div></div>
                    <p>Sessions</p>
                  </a>
                  <a href="#profile-typical-session-fees-main">
                    <div></div>
                    <p>Pricing</p>
                  </a>
                  <a href="#profile-background-main">
                    <div></div>
                    <p>Additional Info</p>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-body-container">
          <div className="profile-body-one">
            <div className="profile-body-one-left">
              {/* contact */}
              <div id="profile-contact-main">
                <img id="contact-back-img" src={profile_Section_ContactPostit} alt="" />
                <div className="profile-contact">
                  <h1>CONTACT-</h1>
                  <div className="profile-contact-details">
                    <p>Phone- {user.contact}</p>
                    <p>Email- {user.email}</p>
                  </div>
                </div>
                <div className="profile-location">
                  <h1>LOCATION-</h1>
                  <p>
                    {" "}
                    <img src={profile_Section_ContactLocation} alt="" />{" "}
                    {user.location}
                  </p>
                </div>
              </div>
              {/* office hours */}
              <div id="profile-time-main">
                <img id="time-back-img" src={profile_Section_SchedulePostit} alt="" />
                <div className="profile-office-hours">
                  <h1>OFFICE HOURS-</h1>
                  <p>{user.workingTime}</p>
                </div>
                <div className="profile-working-days">
                  <h1>WORKING DAYS-</h1>
                  <div className="profile-days">
                    <img src={profile_Section_ScheduleDaysOFF} alt="" />
                  </div>
                  <p>{user.notesOnAvailability}</p>
                </div>
                <div className="profile-medium">
                  <h1>MEDIUM-</h1>
                  <p>{user.medium}</p>
                </div>
                <div className="profile-schedule">
                  <h1>SCHEDULING-</h1>
                  <p>Phone, Whatsapp, Email</p>
                  <div className="profile-schedule-calender">
                    <img src={profile_Section_ScheduleIcon} alt="" />
                  </div>
                </div>
              </div>

              {/* typical session cost */}
              <div id="profile-typical-session-fees-main">
                <img id="typical-session-back-img" src={profile_Section_PricingPostit} alt="" />
                <div className="profile-typical-session-fees">
                  <h1>TYPICAL SESSION COST-</h1>
                  <h1>{user.typicalSessionCost}</h1>
                  <p>{user.notesOnFinancialAssistance}</p>
                </div>
              </div>
            </div>
            <div className="profile-body-one-middle">
              <div className="center-line-images-one">
                <img src={profile_SquigglyPointer} alt="" />
                <img src={profile_SquigglyPointer} alt="" />
                <img src={profile_SquigglyPointer} alt="" />
              </div>
              <div className="center-line-images-two">
                <img src={profile_SquigglyPointer} alt="" />
                <img src={profile_SquigglyPointer} alt="" />
              </div>
              {/* center line */}
            </div>
            <div className="profile-body-one-right">
              {/* qualific */}
              <div id="profile-details-main">
                <img id="profile-details-back-img" src={profile_Section_BackgroundPostit} alt="" />
                <div className="profile-qualification">
                  <h1>QUALIFICATIONS-</h1>
                  <p>{user.qualifications}</p>
                </div>
                <div className="profile-profession">
                  <h1>TYPE OF PROFESSIONAL-</h1>
                  <p>{user.typeOfProfessional}</p>
                </div>
                <div className="profile-experience">
                  <h1>EXPERIENCE</h1>
                  <p>{user.experience}</p>
                </div>
                <div className="profile-languages">
                  <h1>LANGUAGES-</h1>
                  <p>{user.languages}</p>
                </div>
              </div>

              {/* first session */}

              <div id="profile-session-main">
                <img id="first-session-back-img" src={profile_Section_SessionPostit} alt="" />
                <div className="profile-first-session">
                  <h1>YOUR FIRST SESSION-</h1>
                  <p>{user.yourFirstSession}</p>
                </div>
                <div className="profile-session-length">
                  <h1>TYPICAL SESSION LENGTH-</h1>
                  <p>{user.typicalSessionLength}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body-two">

            <div id="profile-background-main">
              <img id="profile-background-back-img" src={profile_Section_AddInfoPostit} alt="" />
              <div className="profile-affiliations">
                <h1>AFFILIATIONS-</h1>
                <p>{user.affiliations}</p>
              </div>
              <div className="profile-target-demography">
                <h1>TARGET DEMOGRAPHIC-</h1>
                <p>{user.targetDemographic}</p>
              </div>
              <div className="profile-evaluations">
                <h1>EVALUATIONS ADMINISTERED</h1>
                <p>{user.evaluationsAdministered}</p>
              </div>
              <div className="profile-area-of-experience">
                <h1>AREAS OF EXPERIENCE</h1>
                <p>{user.areaOfExpertise}</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={topFunction} id="myBtn">Top</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
