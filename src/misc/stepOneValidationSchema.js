import * as Yup from 'yup'

export const StepOneValidationSchema = Yup.object({
    projectName: Yup.string().required("Project name is required"),
    projectDescription: Yup.string().required("Project description is required"),
    client: Yup.string().required("Client name is required"),
    contractor: Yup.string().required("Contractr name is required"),
  });