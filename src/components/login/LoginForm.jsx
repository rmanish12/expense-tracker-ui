import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import isEmpty from "lodash.isempty";
import { TextBox, Button, Link } from "../../ui-components";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import "./Login.css";

const LoginForm = () => {
  const intl = useIntl();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const { email, password } = formValues;
    if (isEmpty(email) || isEmpty(password)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValues]);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="login-form-box">
      <form onSubmit={handleSubmit}>
        <div>
          <TextBox
            label={intl.formatMessage({ id: "email" })}
            id="email"
            name="email"
            type="text"
            required
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="password-field">
            <TextBox
              label={intl.formatMessage({ id: "password" })}
              id="password"
              name="password"
              required
              type={showPassword ? "text" : "password"}
              value={formValues.password}
              onChange={handleChange}
            />
            <div className="password-icon" onClick={changeShowPassword}>
              {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
            </div>
          </div>
        </div>

        <Button
          variant="success"
          style={{ marginTop: "16px" }}
          label={intl.formatMessage({ id: "login" })}
          type="submit"
          disabled={disabled}
        />
      </form>

      <Link to="/register" className="create-account-msg">
        {intl.formatMessage({ id: "createAccount" })}
      </Link>
    </div>
  );
};

export default LoginForm;
