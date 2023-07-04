import React from "react";
import PropTypes from "prop-types";
import "./SelectBox.css";

const SelectBox = ({
  label,
  name,
  children,
  hasError,
  errorMessage,
  required,
  ...rest
}) => {
  return (
    <div id={`select-${name}`}>
      <label className={`select-label ${required ? "required" : ""}`}>
        {label}
      </label>
      <select
        name={name}
        className={`select-box ${hasError ? "select-box-error" : ""}`}
        {...rest}
      >
        {children}
      </select>
      {hasError ? (
        <label className="select-label-error">{errorMessage}</label>
      ) : (
        ""
      )}
    </div>
  );
};

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};

SelectBox.defaultProps = {
  hasError: false,
  errorMessage: "",
  required: false,
};

export default SelectBox;
