import React from "react";
import "./footer.scss";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-section">
      <div className="list1">
        <ul>
          <li>About us</li>
          <li>About Founder</li>
          <li>Contact us</li>
          <li>Team</li>
          <li>Locations</li>
        </ul>
      </div>
      <div className="list2">
        <ul>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Careers</li>
          <li>Solutions</li>
          <li>Our Process</li>
        </ul>
      </div>
      <div className="footer-text">
        <h4>Get In Touch</h4>
        <p>
          Taking seamless key performance indicator offline to maximise the long
          tail.
        </p>
        <div style={{ display: "flex", gap: "20px", fontSize: "30px" }}>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#4267B2" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077b5" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
