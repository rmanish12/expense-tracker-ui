import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FieldWrapper = ({ children }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      {children}
    </Box>
  );
};

FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FieldWrapper;
