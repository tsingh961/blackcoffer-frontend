import React from "react";
import "./button.scss";


const Button = ({icon, btnText }) => {
  return (
    <div className="button-container">
      <button className="button">
        {icon}
        {btnText}
      </button>
    </div>
  );
};

export default Button;
