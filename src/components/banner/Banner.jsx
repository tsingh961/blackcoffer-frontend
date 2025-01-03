import React from "react";
import "./banner.scss";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="banner-container">
          <div className="navbar">
            <img src="/logo/Mask group.png" alt="" />
            <div className="nav-links">
              <a href="#">Who we are &gt;</a>
              <a href="#">What we do &gt;</a>
              <a href="#">Insights &gt;</a>
              <a href="#">Careers &gt;</a>
            </div>
            <Button
              icon={
                <div style={{ fontSize: "20px", color: "white" }}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
              }
              btnText={"Contact Us"}
            />
          </div>
          <div className="banner-text">
            <div className="left">
              <h1>
                TOGETHER WE
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REINVENTED
              </h1>
            </div>
            <div className="right">
              <p>
                Together, we can reinvent your business. Reinvention is about
                breaking industry norms. Our wide range of capabilities,
                ecosystem partnerships and unmatched industry expertise can help
                your business become the next best version of itself.
                <br />
                <br />
                See what we do -&gt;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
