import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, variant, disabled, ...rest }) => {
  return (
    <div id={`button-${label}`}>
      <button className={`button ${variant}`} disabled={disabled} {...rest}>
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["success", "error", "warning"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
