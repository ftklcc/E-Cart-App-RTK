import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, onClick, variant = "primary", type = "button", disabled = false, className = "" }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`btn ${className}`} data-variant={variant}>
      {children}
    </button>
  );
};

export default CustomButton;
