import React from "react";
import PropTypes from "prop-types";
import "./TextBox.css";

const TextBox = ({
  label,
  hasError,
  errorMessage,
  name,
  required,
  id,
  type,
  ...rest
}) => {
  return (
    <div id={`textbox-${name}`}>
      <label className={`input-label ${required ? "required" : ""}`}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className={`input-box ${hasError ? "input-box-error" : ""}`}
        {...rest}
      />
      {hasError ? (
        <label className="input-label-error">{errorMessage}</label>
      ) : (
        ""
      )}
    </div>
  );
};

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TextBox.defaultProps = {
  hasError: false,
  name: "",
  required: false,
  type: "text",
};

export default TextBox;
