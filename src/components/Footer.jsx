import React from "react";
import TwitterIcon from "../images/TwitterIcon.svg";
import FacebookIcon from "../images/FacebookIcon.svg";
import InstagramIcon from "../images/InstagramIcon.svg";
import Githubicon from "../images/GitHubIcon.svg";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <a
        href="https://twitter.com/akinyemi_t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterIcon} alt="TwitterIcon" />
      </a>

      <a
        href="/#"
        rel="noopener noreferrer"
      >
        <img src={FacebookIcon} alt="facebookicon" className="facebookicon" />
      </a>

      <a href="/#" rel="noopener noreferrer">
        <img
          src={InstagramIcon}
          alt="Instagramicon"
          className="instagramicon"
        />
      </a>

      <a href="https://github.com/femakin">
        {" "}
        <img src={Githubicon} alt="GithubIcon" className="githubicon" />
      </a>
    </div>
  );
}
