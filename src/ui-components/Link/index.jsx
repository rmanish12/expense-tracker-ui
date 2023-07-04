import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ to, ...rest }) => {
  return (
    <div className="link">
      <RouterLink to={to} {...rest} />
    </div>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string.isRequired,
};
