import * as Yup from "yup";
import errorMessages from "../../../constants/errorMessages";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.invalidEmailFormat)
    .required(errorMessages.requiredField),
  password: Yup.string().required(errorMessages.requiredField),
});
