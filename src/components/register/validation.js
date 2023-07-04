import isEmpty from "lodash.isempty";

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateFirstName = (firstName) => firstName.trim().length > 0;

export const validateEmail = (email) => EMAIL_REGEX.test(email);

export const validatePassword = (password) =>
  password.trim().length >= 6 && password.trim().length <= 20;

export const validateConfirmPassword = (password, confirmPassword) => {
  console.log("validateConfirmPassword: ", password, confirmPassword);
  return confirmPassword === password;
};

export const validateGender = (gender) => !isEmpty(gender);
