import React from "react";
import PropTypes from "prop-types";

const InputWrapper = ({ children }) => {
  return <div style={{ width: "49%" }}>{children}</div>;
};

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputWrapper;
