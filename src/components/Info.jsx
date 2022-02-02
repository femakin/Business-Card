import React from "react";
import Femiimage from "../images/Femiimage.jpeg";
import "../Styles/Info.css";
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'

export default function Info() {

    const ButtonMailto = ({mailto, className}) =>{
        return (
            <button className={className} onClick={(e)=>{
                window.location = mailto;
                e.preventDefault()
            }}  >
                <img src={email} alt="email_icon" />   Email
            </button>
        )
    }


  return (
    <div className="info-body">
      <img src={Femiimage} alt="Femiimage" className="info-img" />
      <div className="info-socials">
        <div className="info-title-role">
          <h1 className="info-name">Femi Akinyemi</h1>
          <p className="info-role">Frontend Developer</p>
          <p className="info-website">Femi Akinyemi website</p>
        </div>

        <div className="social-btns">
          <div className="email-btn">
            {" "}
          <ButtonMailto className="email-btn-socials" mailto="mailto:akinfemi46@gmail.com"/>
          </div>
          <div className="linkedin-btn">
            {" "}
            <button className="linkedin-btn-socials">  <img src={linkedin} alt="linkedin_icon" />    LinkedIn</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
