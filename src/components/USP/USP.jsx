import React from "react";
import "./USP.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const USP = () => {
  return (
    <div className="usp-cards">
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Consistency</p>
      </div>
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Improvement</p>
      </div>
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Branching</p>
      </div>
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Expertise</p>
      </div>
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Security</p>
      </div>
      <div className="card">
        <div className="icon">
        <FontAwesomeIcon
          icon={faBullseye}
          size="6x"
          style={{ color: "white" }}
        />
        </div>
        <p>Transparency</p>
      </div>
      
    </div>
  );
};

export default USP;
