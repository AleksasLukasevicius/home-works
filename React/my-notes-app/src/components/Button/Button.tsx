import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return (
    <div className="button-wrapper">
      <button type="button" className="Button">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
