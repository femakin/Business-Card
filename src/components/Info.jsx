import React from "react";
import Femiimage from "../images/Femiimage.jpeg";
import "../Styles/Info.css";
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'
import { useNavigate, Link , Navigate} from "react-router-dom";
import About from "./About";
import Interest from "./Interest";

export default function Info() {
  let navigate = useNavigate();


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



    const onBackClick = e => {
      e.preventDefault()
      // navigate(-1);
      navigate("/dashboard/orders")
    }




  return (
    <div className="info-body">
      <img src={Femiimage} alt="Femiimage" className="info-img" />
     <div className="black-background">
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
            <button className="linkedin-btn-socials" >  <img src={linkedin} alt="linkedin_icon" />  <a
            href="https://www.linkedin.com/in/femi-akinyemi/"
            target="_blank"
            rel="noopener noreferrer"
            className="a-target"
          >
            LinkedIn 
          </a>  </button>
          </div>
        </div>
      </div>


     <div className="about-div">
     <About/>
     </div>


     <div className="Interest-div">
      <Interest/>
     </div>
     </div>
    </div>
  );
}
