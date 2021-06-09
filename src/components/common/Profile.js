import React, {useState, useEffect} from "react"
import { GoogleSpreadsheet } from "google-spreadsheet";

import "./Profile.css";
import { Link } from "react-router-dom";

import {fetchData} from "../apiCall"

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
} from "../../assets";

const Profile = () => {

    // const [rowData, setRowData] = useState([]);
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
    })

const {
        name, 
        contact, 
        email, 
        location, 
        workingTime, 
        notesOnAvailability,
        medium,
        typicalSessionCost,
        notesOnFinancialAssistance,
        qualifications,
        typeOfProfessional,
        experience,
        languages,
        yourFirstSession,
        typicalSessionLength,
        affiliations,
        targetDemographic,
        evaluationsAdministered,
        areaOfExpertise,
      } = user;

    useEffect(() => {
        var url_string =window.location.href;
    
var url = new URL(url_string);
var id = url.searchParams.get("id");
// console.log("id", id);
        const doc = new GoogleSpreadsheet("1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto");
        // console.log(fetchData(doc));
        fetchData(doc).then((data) => {
            // setRowData(data);
                // console.log(rowData);
            let rowData = data;
            if(rowData.length){
                for(let i=0;i<rowData.length;i++){
                    console.log(rowData[i]);
                    if(rowData[i]._rowNumber == id ){
                        setUser({...user,
                        name:rowData[i]["Full Name"], 
                        contact:rowData[i]["Contact - Phone Number"], 
                        email: rowData[i]["Contact - Email ID"],
                        location: rowData[i]["Location"],
                        workingTime: rowData[i]["Hours of Availability"],
                        notesOnAvailability: rowData[i]["Notes on Availability"],
                        medium: rowData[i]["Medium"],
                        typicalSessionCost: rowData[i]["Typical Session Cost"],
                        notesOnFinancialAssistance: rowData[i]["Notes on Financial Assistance"],
                        qualifications: rowData[i]["Qualifications"],
                        typeOfProfessional: rowData[i]["Type of Professional"],
                        experience: rowData[i]["Experience"],
                        languages: rowData[i]["Languages"],
                        yourFirstSession: rowData[i]["Your First Session"],
                        typicalSessionLength: rowData[i]["Typical Session Length"],
                        affiliations: rowData[i]["Affiliations"],
                        targetDemographic: rowData[i]["Target Demographic"],
                        evaluationsAdministered: rowData[i]["Evaluations Administered"],
                        areaOfExpertise: rowData[i]["Areas of Expertise"],
                    })
                    }
                }
            }
        })
    },[]);

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

    return (
        <div className="profile-main-container">
            <div className="profile-container">

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
                        <div className="profile-name">
                            {name}
                        </div>
                        <div className="profile-icons">
                            <a href=""> <img src={profile_LogoInstagram} alt="" /></a>
                            <a href=""> <img src={profile_LogoLinkedin} alt="" /></a>
                            <a href=""> <img src={profile_LogoTwitter} alt="" /></a>
                            <a href=""> <img src={profile_LogoWebsite} alt="" /></a>

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
                                        <div ></div>
                                        <p>Background</p>
                                    </a>
                                    <a href="#profile-time-main">
                                        <div ></div>
                                        <p>Schedule</p>
                                    </a>
                                    <a href="#profile-session-main">
                                        <div ></div>
                                        <p>Sessions</p>
                                    </a>
                                    <a href="#profile-typical-session-fees-main">
                                        <div ></div>
                                        <p>Pricing</p>
                                    </a>
                                    <a href="#profile-background-main">
                                        <div ></div>
                                        <p>Additional Info</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-body-container">
                    <div className="profile-body-one">

                        <div className="profile-body-one-left">


                            {/* contact */}
                            <div id="profile-contact-main">

                                <div className="profile-contact">
                                    <h1>CONTACT-</h1>
                                    <div className="profile-contact-details">
                                        <p>Phone- {contact}</p>
                                        <p>Email- {email}</p>
                                    </div>
                                </div>
                                <div className="profile-location">
                                    <h1>LOCATION-</h1>
                                    <p> <img src={profile_Section_ContactLocation} alt="" /> {location}</p>
                                </div>

                            </div>
                            {/* office hours */}
                            <div id="profile-time-main">

                                <div className="profile-office-hours">
                                    <h1>OFFICE HOURS-</h1>
                                    <p>{workingTime}</p>
                                   
                                </div>
                                <div className="profile-working-days">
                                    <h1>WORKING DAYS-</h1>
                                    <div className="profile-days">
                                        <img src={profile_Section_ScheduleDaysOFF} alt="" />
                                    </div>
                                    <p>
                                       {notesOnAvailability}
                                    </p>
                                </div>
                                <div className="profile-medium">
                                    <h1>MEDIUM-</h1>
                                    <p>{medium}</p>
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
                                <div className="profile-typical-session-fees">
                                    <h1>TYPICAL SESSION COST-</h1>
                                    <h1>{typicalSessionCost}</h1>
                                    <p>{notesOnFinancialAssistance}</p>
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
                                <div className="profile-qualification">
                                    <h1>QUALIFICATIONS-</h1>
                                    <p>{qualifications}</p>
                                </div>
                                <div className="profile-profession">
                                    <h1>TYPE OF PROFESSIONAL-</h1>
                                    <p>{typeOfProfessional}</p>
                                </div>
                                <div className="profile-experience">
                                    <h1>EXPERIENCE</h1>
                                    <p>{experience}</p>
                                </div>
                                <div className="profile-languages">
                                    <h1>LANGUAGES-</h1>
                                    <p>{languages}</p>
                                </div>
                            </div>

                            {/* first session */}

                            <div id="profile-session-main">
                                <div className="profile-first-session">
                                    <h1>YOUR FIRST SESSION-</h1>
                                    <p>
                                        {yourFirstSession}
                                    </p>
                                </div>
                                <div className="profile-session-length">
                                    <h1>TYPICAL SESSION LENGTH-</h1>
                                    <p>{typicalSessionLength}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-body-two">
                        <div id="profile-background-main">
                            <div className="profile-affiliations">
                                <h1>AFFILIATIONS-</h1>
                                <p>{affiliations}</p>
                            </div>
                            <div className="profile-target-demography">
                                <h1>TARGET DEMOGRAPHIC-</h1>
                                <p>{targetDemographic}</p>
                            </div>
                            <div className="profile-evaluations">
                                <h1>EVALUATIONS ADMINISTERED</h1>
                                <p>{evaluationsAdministered}</p>
                            </div>
                            <div className="profile-area-of-experience">
                                <h1>AREAS OF EXPERIENCE</h1>
                                <p>{}areaOfExpertise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;