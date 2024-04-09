import * as Yup from "yup";
import ERROR_MESSAGES from "../../../../../constants/errorMessages";

export const createTeacherValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required(ERROR_MESSAGES.firstNameRequiredField)
    .matches(
      /^(?=[^A-Za-z]*[A-Za-z])[a-zA-Z0-9 ]*$/,
      ERROR_MESSAGES.firstNameRegex
    ),
  lastName: Yup.string()
    .trim()
    .required(ERROR_MESSAGES.lastNameRequiredField)
    .matches(
      /^(?=[^A-Za-z]*[A-Za-z])[a-zA-Z0-9 ]*$/,
      ERROR_MESSAGES.lastNameRegex
    ),
});
