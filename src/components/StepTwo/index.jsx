"use client";
import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { StepOneForm } from "../StepOne";
import { StepTwoValidationSchema } from "@/misc/stepTwoValidationSchema";
import * as Styles from "./index.styles";
import { useRouter } from "next/navigation";
import { CSV } from "../CSV";

export const StepTwoForm = ({ data, next, prev }) => {
  const router = useRouter();
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <>
      <StepOneForm data={data} isDisabled={true} />
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={StepTwoValidationSchema}
      >
        {(props) => (
          <Form>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={12} sm={12} md={12}>
                <Styles.Upload>
                  <Styles.Label>Upload your csv file</Styles.Label>
                  <CSV />
                </Styles.Upload>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="max_X"
                  label="max_X"
                  fullWidth
                  type="text"
                  value={
                    props.values.max_X
                      ? props.values.max_X
                      : (props.values.max_X = data.max_X)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="max_X" />}
                  error={props.errors.max_X && props.touched.max_X}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="min_X"
                  label="min_X"
                  fullWidth
                  value={
                    props.values.min_X
                      ? props.values.min_X
                      : (props.values.min_X = data.min_X)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="min_X" />}
                  error={props.errors.min_X && props.touched.min_X}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="max_Y"
                  label="max_Y"
                  fullWidth
                  value={
                    props.values.max_Y
                      ? props.values.max_Y
                      : (props.values.max_Y = data.max_Y)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="max_Y" />}
                  error={props.errors.max_Y && props.touched.max_Y}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="min_Y"
                  label="min_Y"
                  fullWidth
                  value={
                    props.values.min_Y
                      ? props.values.min_Y
                      : (props.values.min_Y = data.min_Y)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="min_Y" />}
                  error={props.errors.min_Y && props.touched.min_Y}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="max_Z"
                  label="max_Z"
                  fullWidth
                  value={
                    props.values.max_Z
                      ? props.values.max_Z
                      : (props.values.max_Z = data.max_Z)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="max_Z" />}
                  error={props.errors.max_Z && props.touched.max_Z}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  name="min_Z"
                  label="min_Z"
                  fullWidth
                  value={
                    props.values.min_Z
                      ? props.values.min_Z
                      : (props.values.min_Z = data.min_Z)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="min_Z" />}
                  error={props.errors.min_Z && props.touched.min_Z}
                />
              </Grid>
            </Grid>

            <Styles.ButtonDiv>
              <Button
                type="button"
                variant="outlined"
                onClick={() => prev(props.values)}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="outlined"
                onClick={() => router.push("/result")}
              >
                Submit
              </Button>
            </Styles.ButtonDiv>
          </Form>
        )}
      </Formik>
    </>
  );
};
