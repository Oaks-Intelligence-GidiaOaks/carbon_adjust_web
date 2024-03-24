import * as yup from "yup";

export const FormSchemas = () => {
  return {
    RegisterSchema: yup.object().shape({
      name: yup.string().required("Your full name is required"),
      email: yup.string().email().required("Please enter a valid email"),
      password: yup
        .string()
        .min(8)
        .required("Password cannot be less than 8 characters"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords don't match")
        .required(),
      accountType: yup.string().required("Please select account type"),
    }),
  };
};
