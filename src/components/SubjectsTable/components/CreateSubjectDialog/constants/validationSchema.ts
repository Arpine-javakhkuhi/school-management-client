import * as Yup from "yup";
import ERROR_MESSAGES from "../../../../../constants/errorMessages";

export const createSubjectValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(ERROR_MESSAGES.subjectNameRequiredField)
    .matches(
      /^(?=[^A-Za-z]*[A-Za-z])[a-zA-Z0-9 ]*$/,
      ERROR_MESSAGES.firstNameRegex
    ),
});
