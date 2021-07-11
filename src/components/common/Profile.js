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
  profile_Section_S_OFF,
  profile_Section_S_ON,
  profile_Section_M_OFF,
  profile_Section_M_ON,
  profile_Section_T_OFF,
  profile_Section_T_ON,
  profile_Section_W_OFF,
  profile_Section_W_ON,
  profile_Section_F_OFF,
  profile_Section_F_ON,
  profile_Section_PricingTape,
  profile_Section_SessionTape,
  profile_Section_Tape,
  profile_Section_AddInfoTape,
} from "../../assets";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    instagram: "",
    linkedin: "",
    website: "",
    twitter: "",
    contact: "",
    email: "",
    location: "",
    workingTime: "",
    notesOnAvailability: "",
    medium: "",
    calender: "",
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
    // Therapist is data is in first sheet that's why sheet_id=0
    const locationElement = document.getElementById("profileLocation");
    const affiliationElement = document.getElementById("profileAffiliations");
    const demographyElement = document.getElementById(
      "profileTargetDemography"
    );
    const evaluationElement = document.getElementById("profileEvaluations");
    const expertiseElement = document.getElementById(
      "profileAreaofExperience"
    );
    const contactElement = document.getElementById("profile-contact-main");
    const timeElement = document.getElementById("profile-time-main");
    const typicalSessionElement = document.getElementById(
      "profile-typical-session-fees-main"
    );
    const detailsElement = document.getElementById("profile-details-main");
    const sessionElement = document.getElementById("profile-session-main");
    const backgroundElement = document.getElementById(
      "profile-background-main"
    );
    fetchSheetRow(0, id).then((rowData) => {
     
      // const centerLineElement=document.getElementsByClassName("profile-body-one-middle");

      // console.log(rowData["Affiliations"]);
      // console.log(affiliationElement);

      if (!rowData["Location"]) {
        locationElement.style.display = "none";
      }
      if (!rowData["Affiliations"]) {
        affiliationElement.style.display = "none";
      }
      if (!rowData["Target Demographic"]) {
        demographyElement.style.display = "none";
      }
      if (!rowData["Evaluations Administered"]) {
        evaluationElement.style.display = "none";
      }
      if (!rowData["Areas of Expertise"]) {
        expertiseElement.style.display = "none";
      }

      if (!rowData["Instagram"]) {
        document.getElementById("profile-instagram-logo").style.display =
          "none";
      }
      if (!rowData["LinkedIn"]) {
        document.getElementById("profile-linkedin-logo").style.display = "none";
      }
      if (!rowData["Twitter"]) {
        document.getElementById("profile-twitter-logo").style.display = "none";
      }
      if (!rowData["Website"]) {
        document.getElementById("profile-website-logo").style.display = "none";
      }
      if(!rowData["Contact - Phone Number"])
      {
        document.getElementById("user-phone-number").style.display="none";
      }
      if(!rowData["Contact - Email ID"])
      {
        document.getElementById("user-email-address").style.display="none";
      }
      if(!rowData["Sunday"])
      {
          document.getElementsByClassName("week_days")[1].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[0].style.display="none"; 
      }
      if(!rowData["Monday"])
      {
          document.getElementsByClassName("week_days")[3].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[2].style.display="none"; 
      }
      if(!rowData["Tuesday"])
      {
          document.getElementsByClassName("week_days")[5].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[4].style.display="none"; 
      }
      if(!rowData["Wednesday"])
      {
          document.getElementsByClassName("week_days")[7].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[6].style.display="none"; 
      }
      if(!rowData["Thursday"])
      {
          document.getElementsByClassName("week_days")[9].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[8].style.display="none"; 
      }
      if(!rowData["Friday"])
      {
          document.getElementsByClassName("week_days")[11].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[10].style.display="none"; 
      }
      if(!rowData["Saturday"])
      {
          document.getElementsByClassName("week_days")[13].style.display="none"; 
      }else{
        document.getElementsByClassName("week_days")[12].style.display="none"; 
      }
      if(!rowData["Scheduling - Calendar Icon"])
      {
        document.getElementsByClassName("calender-icon-info")[0].style.display="none";
      }
      

      setUser({
        ...user,
        name: rowData["Full Name"],
        instagram: "https://instagram.com/" + rowData["Instagram"].slice(1),
        linkedin: rowData["LinkedIn"],
        website: "https://" + rowData["Website"],
        twitter: "http://twitter.com/" + rowData["Twitter"].slice(1),
        contact: rowData["Contact - Phone Number"],
        email: rowData["Contact - Email ID"],
        location: rowData["Location"],
        workingTime: rowData["Hours of Availability"],
        notesOnAvailability: rowData["Notes on Availability"],
        medium: rowData["Medium"],
        calender: rowData["Scheduling - Calendar Icon"],
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
      setTimeout(() => {
        var contactoffsety=contactElement.offsetTop+40;
        document.getElementsByClassName("center-line-images-one-img")[0].style.top=contactoffsety+"px";
  
        var timeoffsety=timeElement.offsetTop+40;
        document.getElementsByClassName("center-line-images-one-img")[2].style.top=timeoffsety+"px";
  
        var typicalsessionoffsety=typicalSessionElement.offsetTop+60;
        document.getElementsByClassName("center-line-images-one-img")[4].style.top=typicalsessionoffsety+"px";
  
        var detailsoffsety=detailsElement.offsetTop+40;
        document.getElementsByClassName("center-line-images-one-img")[1].style.top=detailsoffsety+"px";
  
        var sessionoffsety=sessionElement.offsetTop+40;
        document.getElementsByClassName("center-line-images-one-img")[3].style.top=sessionoffsety+"px";
  
        var centerlineoffsetheight=Math.max(typicalSessionElement.offsetTop+typicalSessionElement.offsetHeight,sessionElement.offsetTop+sessionElement.offsetHeight)-200;
        document.getElementsByClassName("profile-body-one-middle")[0].style.height=centerlineoffsetheight+"px";
  
        var bottomoffsetheight=backgroundElement.offsetTop+backgroundElement.offsetHeight-100;
        document.getElementById("mainContainer").style.height=bottomoffsetheight+"px";
      }, 100);
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

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="mainContainer" className="profile-main-container">
      {/* <div className="profile-container"> */}
      <div className="profile-header-container">
        <div className="profile-to-directory">
          <a href="/directory">
            <ion-icon
              name="caret-down-outline"
              data-filter-name="profession"
            ></ion-icon>
            <span>DIRECTORY</span>
            {/* </Link> */}
          </a>
        </div>
        <div className="profile-user-main">
          <img
            id="profile-user-main-back-img"
            src={profile_YellowNameBlob}
            alt=""
          />
          <div className="profile-name">{user.name}</div>
          <div className="profile-icons">
            <a href={user.instagram} target="_blank" id="profile-instagram-logo">
              {" "}
              <img src={profile_LogoInstagram} alt="" />
            </a>
            <a href={user.linkedin} target="_blank" id="profile-linkedin-logo">
              {" "}
              <img src={profile_LogoLinkedin} alt="" />
            </a>
            <a href={user.twitter} target="_blank" id="profile-twitter-logo">
              {" "}
              <img src={profile_LogoTwitter} alt="" />
            </a>
            <a href={user.website} target="_blank" id="profile-website-logo">
              {" "}
              <img src={profile_LogoWebsite} alt="" />
            </a>

            {/* icons */}
          </div>
        </div>
        <div>
          <button className="jump-to" id="jump-to-ID" onClick={handleDropdown}>
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
                <img id="contact-tape" class="tapes" src={profile_Section_SessionTape} alt="" />
                {/* <img
                  id="contact-back-img"
                  src={profile_Section_ContactPostit}
                  alt=""
                /> */}
                <div className="profile-contact">
                  <h1>CONTACT-</h1>
                  <div className="profile-contact-details">
                    <p id="user-phone-number">Phone- {user.contact}</p>
                    <p id="user-email-address">Email- {user.email}</p>
                  </div>
                </div>
                <div className="profile-location" id="profileLocation">
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
                <img id="time-tape" class="tapes" src={profile_Section_Tape} alt="" />
                {/* <img
                  id="time-back-img"
                  src={profile_Section_SchedulePostit}
                  alt=""
                /> */}
                <div className="profile-office-hours">
                  <h1>OFFICE HOURS-</h1>
                  <p>{user.workingTime}</p>
                </div>
                <div className="profile-working-days">
                  <h1>WORKING DAYS-</h1>
                  <div className="profile-days">
                   <img className="week_days" src={profile_Section_S_OFF} alt="" />
                   <img className="week_days" src={profile_Section_S_ON} alt="" />
                   <img className="week_days" src={profile_Section_M_OFF} alt="" />
                   <img className="week_days" src={profile_Section_M_ON} alt="" />
                   <img className="week_days" src={profile_Section_T_OFF} alt="" />
                   <img className="week_days" src={profile_Section_T_ON} alt="" />
                   <img className="week_days" src={profile_Section_W_OFF} alt="" />
                   <img className="week_days" src={profile_Section_W_ON} alt="" />
                   <img className="week_days" src={profile_Section_T_OFF} alt="" />
                   <img className="week_days" src={profile_Section_T_ON} alt="" />
                   <img className="week_days" src={profile_Section_F_OFF} alt="" />
                   <img className="week_days" src={profile_Section_F_ON} alt="" />
                   <img className="week_days" src={profile_Section_S_OFF} alt="" />
                   <img className="week_days" src={profile_Section_S_ON} alt="" />
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
                    <a class="calender-icon-info" href={user.calender}>
                    <img  src={profile_Section_ScheduleIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>

              {/* typical session cost */}
              <div id="profile-typical-session-fees-main">
                <img id="typical-session-tape" class="tapes" src={profile_Section_PricingTape} alt="" />
                {/* <img
                  id="typical-session-back-img"
                  src={profile_Section_PricingPostit}
                  alt=""
                /> */}
                <div className="profile-typical-session-fees">
                  <h1>TYPICAL SESSION COST-</h1>
                  <h1>{user.typicalSessionCost}</h1>
                  <p>{user.notesOnFinancialAssistance}</p>
                </div>
              </div>
            </div>
            <div className="profile-body-one-middle">
              <div className="center-line-images-one">
                <img
                  className="center-line-images-one-img"
                  src={profile_SquigglyPointer}
                  alt=""
                />
                <img
                  className="center-line-images-one-img"
                  src={profile_SquigglyPointer}
                  alt=""
                />
                <img
                  className="center-line-images-one-img"
                  src={profile_SquigglyPointer}
                  alt=""
                />
                {/* </div> */}
                {/* <div className="center-line-images-two"> */}
                <img
                  className="center-line-images-one-img"
                  src={profile_SquigglyPointer}
                  alt=""
                />
                <img
                  className="center-line-images-one-img"
                  src={profile_SquigglyPointer}
                  alt=""
                />
              </div>
              {/* center line */}
            </div>
            <div className="profile-body-one-right">
              {/* qualific */}
              <div id="profile-details-main">
              <img id="qualification-tape" class="tapes" src={profile_Section_PricingTape} alt="" />
                {/* <img
                  id="profile-details-back-img"
                  src={profile_Section_BackgroundPostit}
                  alt=""
                /> */}
                <div className="profile-qualification">
                  <h1>QUALIFICATIONS-</h1>
                  <p>{user.qualifications}</p>
                </div>
                <div className="profile-profession">
                  <h1>TYPE OF PROFESSIONAL-</h1>
                  <p>{user.typeOfProfessional}</p>
                </div>
                <div className="profile-experience">
                  <h1>EXPERIENCE-</h1>
                  <p>{user.experience} Years</p>
                </div>
                <div className="profile-languages">
                  <h1>LANGUAGES-</h1>
                  <p>{user.languages}</p>
                </div>
              </div>

              {/* first session */}

              <div id="profile-session-main">
              <img id="first-session-tape" class="tapes" src={profile_Section_SessionTape} alt="" />
                {/* <img
                  id="first-session-back-img"
                  src={profile_Section_SessionPostit}
                  alt=""
                /> */}
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
            <img id="background-tape" class="tapes" src={profile_Section_AddInfoTape} alt="" />
              <div className="profile-affiliations" id="profileAffiliations">
                <h1>AFFILIATIONS-</h1>
                <p>{user.affiliations}</p>
              </div>
              <div
                className="profile-target-demography"
                id="profileTargetDemography"
              >
                <h1>TARGET DEMOGRAPHIC-</h1>
                <p>{user.targetDemographic}</p>
              </div>
              <div className="profile-evaluations" id="profileEvaluations">
                <h1>EVALUATIONS ADMINISTERED-</h1>
                <p>{user.evaluationsAdministered}</p>
              </div>
              <div
                className="profile-area-of-experience"
                id="profileAreaofExperience"
              >
                <h1>AREAS OF EXPERTISE-</h1>
                <p>{user.areaOfExpertise}</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={topFunction} id="myBtn">
            &#8593;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
