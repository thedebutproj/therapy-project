import React, { useState, useEffect } from "react";
import "./Donor.css";


import {
    donor_BenefitsDetails,
    donor_MainIllustration,
} from "../../assets";

const Donor = () => {

    return (
        <>
            <div className="donor-main-container">
                <div id="donor-benefits">
                    <div className="donor-benefits-heading">
                        <p>BENEFITS</p>
                    </div>
                    <div className="donor-benefits-content">
                        <img src={ donor_BenefitsDetails} alt="" />
                        <p>For most, the decision to seek professional help for their mental wellbeing is a daunting task. While there are many factors at play, the two major variables in the equation - especially for students and young professionals - are information asymmetry and financial constraints. While we strongly believe that through our curated content and our verified directory, we can address the former, we're also passionate about trying to tackle the latter.</p>
                        <p>Via Benefit, The Debut Project would like to assist first-time therapy seekers gain access to the mental healthcare they deserve, by providing ways to obtain monetary aid for their sessions. If you are a student, young-professional, or someone who does not have the resources to pay fully for professional help, please reach out to us via the form at the bottom of this page.</p>
                        <p>While we are launching this humble philanthropic initiative for students and graduates of IIT Roorkee only, we look forward to expanding the scope this idea soon. Hence, we also welcome our visitors to discuss and consider contributing to this cause, and hence widen the scope of prospective beneficiary.</p>
                    </div>
                </div>
                <div id="donor-what-can-you-do">
                    <div className="what-can-you-do-heading">
                        <p>What can you do?</p>
                    </div>
                    <div className="what-can-you-do-content">
                        <div>
                            <h1>Pledge</h1>
                            <p>Borrow for your first session today, and pledge to 'pay back' by supporting an individual's session in the future.</p>
                        </div>
                        <div className="donor-content-line"></div>
                        <div>
                            <h1>Receive</h1>
                            <p>Try therapy for 'free'! Accept a donation from our team/our partner donors to pay for your first session.</p>
                        </div>
                        <div className="donor-content-line"></div>
                        <div>
                            <h1>Donate</h1>
                            <p>Support professional care seekers by fulfilling requests of financial assistance, or contribute towards the maintenance of this site.</p>
                        </div>
                    </div>
                </div>
                <div id="donor-register-form">
                    <div className="donor-register-form-left">
                        <div className="donor-register-form-heading">
                            <h1>Register your interest below!</h1>
                        </div>
                        <div className="donor-register-form-fill">
                            <form action="" method="post">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="text" placeholder="Contact Number" />
                                <input type="text" placeholder="I would like to..(Pledge, Receive, Donate)" />
                                <textarea name="" id="" cols="30" rows="10" placeholder="Message for our team"></textarea>
                                <button>Submit</button>
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