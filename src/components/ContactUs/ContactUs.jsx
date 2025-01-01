import React from "react";
import "./contactus.scss";
import Button from "../button/Button";

function ContactUs() {
  return (
    <div className="contactus-section">
      <h2>REQUEST A CALL BACK</h2>
      <div className="text">
        <h4>Get your Business Right up There</h4>
        <p>
          When you need intelligent answers to your toughest questions, we're
          here to help. We're just a call or email away! Don't hang back from
          getting in touch with us. We'll be glad to assist you.
        </p>
      </div>
      <Button btnText="Request a Call Back" />
    </div>
  );
}

export default ContactUs;
