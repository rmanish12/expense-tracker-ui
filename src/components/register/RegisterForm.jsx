import React, { useState } from "react";
import { useIntl } from "react-intl";
import FieldWrapper from "./FieldWrapper";
import InputWrapper from "./InputWrapper";
import { TextBox, SelectBox, Button, Link } from "../../ui-components";
import {
  validateFirstName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateGender,
} from "./validation";

const initialErrorState = {
  firstName: false,
  email: false,
  password: false,
  confirmPassword: false,
  gender: false,
};

const Register = () => {
  const intl = useIntl();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    ...initialErrorState,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, email, password, confirmPassword, gender } = formValues;
    if (
      validateFirstName(firstName) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(password, confirmPassword) &&
      validateGender(gender)
    ) {
      setErrors({ ...initialErrorState });
      return true;
    }

    const errorState = { ...initialErrorState };
    if (!validateFirstName(firstName)) {
      errorState.firstName = true;
    }
    if (!validateEmail(email)) {
      errorState.email = true;
    }
    if (!validatePassword(password)) {
      errorState.password = true;
    }
    if (!validateConfirmPassword(password, confirmPassword)) {
      errorState.confirmPassword = true;
    }
    if (!validateGender(gender)) {
      errorState.gender = true;
    }

    setErrors({ ...errorState });
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Valid");
    }
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <form onSubmit={handleSubmit}>
        <FieldWrapper>
          <InputWrapper>
            <TextBox
              label={intl.formatMessage({ id: "firstName" })}
              id="firstName"
              name="firstName"
              required
              value={formValues.firstName}
              onChange={handleChange}
              hasError={errors.firstName}
              errorMessage={intl.formatMessage({ id: "firstNameError" })}
            />
          </InputWrapper>

          <InputWrapper>
            <TextBox
              label={intl.formatMessage({ id: "lastName" })}
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </InputWrapper>
        </FieldWrapper>

        <FieldWrapper>
          <InputWrapper>
            <TextBox
              label={intl.formatMessage({ id: "email" })}
              id="email"
              name="email"
              type="text"
              required
              value={formValues.email}
              onChange={handleChange}
              hasError={errors.email}
              errorMessage={intl.formatMessage({ id: "emailError" })}
            />
          </InputWrapper>

          <InputWrapper>
            <TextBox
              label={intl.formatMessage({ id: "password" })}
              id="password"
              name="password"
              type="password"
              required
              value={formValues.password}
              onChange={handleChange}
              hasError={errors.password}
              errorMessage={intl.formatMessage({ id: "passwordError" })}
            />
          </InputWrapper>
        </FieldWrapper>

        <FieldWrapper>
          <InputWrapper>
            <TextBox
              label={intl.formatMessage({ id: "confirmPassword" })}
              id="confirmPassword"
              name="confirmPassword"
              required
              type="password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              hasError={errors.confirmPassword}
              errorMessage={intl.formatMessage({ id: "confirmPasswordError" })}
            />
          </InputWrapper>

          <InputWrapper>
            <SelectBox
              name="gender"
              id="gender"
              required
              value={formValues.gender}
              label={intl.formatMessage({ id: "gender" })}
              onChange={handleChange}
              hasError={errors.gender}
              errorMessage={intl.formatMessage({ id: "genderError" })}
            >
              <option value="">{intl.formatMessage({ id: "None" })}</option>
              <option value={"MALE"}>
                {intl.formatMessage({ id: "Male" })}
              </option>
              <option value={"FEMALE"}>
                {intl.formatMessage({ id: "Female" })}
              </option>
            </SelectBox>
          </InputWrapper>
        </FieldWrapper>

        <FieldWrapper>
          <div style={{ width: "200px" }}>
            <Button
              variant="success"
              type="submit"
              label={intl.formatMessage({ id: "register" })}
            >
              {intl.formatMessage({ id: "register" })}
            </Button>
          </div>
        </FieldWrapper>

        <Link to="/login">{intl.formatMessage({ id: "loginAccount" })}</Link>
      </form>
    </div>
  );
};

export default Register;
