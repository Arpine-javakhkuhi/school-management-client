import * as Yup from "yup";

import errorMessages from "../../../constants/errorMessages";

export const createUserValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required(errorMessages.firstNameRequiredField)
    .matches(
      /^(?=[^A-Za-z]*[A-Za-z])[a-zA-Z0-9 ]*$/,
      errorMessages.firstNameRegex
    ),
  lastName: Yup.string()
    .trim()
    .required(errorMessages.lastNameRequiredField)
    .matches(
      /^(?=[^A-Za-z]*[A-Za-z])[a-zA-Z0-9 ]*$/,
      errorMessages.lastNameRegex
    ),
  email: Yup.string()
    .required(errorMessages.emailRequiredField)
    .email(errorMessages.invalidEmailFormat),
});
