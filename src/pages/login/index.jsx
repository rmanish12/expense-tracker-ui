import React from "react";
import { useIntl } from "react-intl";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";

const Login = () => {
  const intl = useIntl();
  return (
    <Box
      id="login-box"
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card id="login-card">
        <CardContent id="login-card-content">
          <Typography variant="h6">
            {intl.formatMessage({ id: "login" })}
          </Typography>
          <Divider />

          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
