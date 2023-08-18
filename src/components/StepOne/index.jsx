"use client";
import { StepOneValidationSchema } from "@/misc/stepOneValidationSchema";
import { Button, Grid, TextField } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import * as Styles from './index.styles'

export const StepOneForm = ({ data, next, isDisabled }) => {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={StepOneValidationSchema}
    >
      {(props) => (
        <Form>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                disabled={isDisabled}
                type="text"
                name="projectName"
                label="Project Name"
                value={props.values.projectName}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="projectName" />}
                error={props.errors.projectName && props.touched.projectName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                disabled={isDisabled}
                type="text"
                name="projectDescription"
                label="project Description"
                value={props.values.projectDescription}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="projectDescription" />}
                error={
                  props.errors.projectDescription &&
                  props.touched.projectDescription
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                disabled={isDisabled}
                type="text"
                name="client"
                label="Client"
                value={props.values.client}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="client" />}
                error={props.errors.client && props.touched.client}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                disabled={isDisabled}
                type="text"
                name="contractor"
                label="Contractor"
                value={props.values.contractor}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={<ErrorMessage name="contractor" />}
                error={props.errors.contractor && props.touched.contractor}
              />
            </Grid>
          </Grid>

          {!isDisabled && (
            <Styles.ButtonDiv>
              <Button type="submit" variant="outlined">Next</Button>
            </Styles.ButtonDiv>
          )}
        </Form>
      )}
    </Formik>
  );
};
