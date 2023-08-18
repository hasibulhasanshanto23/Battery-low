import * as Yup from "yup";

export const StepTwoValidationSchema = Yup.object({
  max_X: Yup.number()
    .typeError("max_X must be a number")
    .required("max_X is required"),
  max_Y: Yup.number()
    .typeError("max_Y must be a number")
    .required("max_Y is required"),
  max_Z: Yup.number()
    .typeError("max_Z must be a number")
    .required("max_Z is required"),

  min_X: Yup.number()
    .typeError("min_X must be a number")
    .required("min_X is required"),
  min_Y: Yup.number()
    .typeError("min_Y must be a number")
    .required("min_Y is required"),
  min_Z: Yup.number()
    .typeError("min_Z must be a number")
    .required("min_Z is required"),
});
