import React from "react";
import { useIntl } from "react-intl";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import RegisterForm from "../../components/register/RegisterForm";

const Register = () => {
  const intl = useIntl();
  return (
    <Box
      id="register-box"
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card id="register-card" sx={{ width: "550px" }}>
        <CardContent id="register-card-content">
          <Typography variant="h6">
            {intl.formatMessage({ id: "register" })}
          </Typography>
          <Divider />

          <RegisterForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
