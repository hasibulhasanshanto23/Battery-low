"use client";
import React, { useState } from "react";
import { StepOneForm } from "../StepOne";
import { StepTwoForm } from "../StepTwo";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";
import * as Styles from "./index.styles";
import { ContextApi } from "@/app/layout";
import { Container } from "@mui/material";

export const BLForm = () => {
  //step count  STATE
  const [stepCount, setStepCount] = useState(0);

  const { companyData, setCompanyData } = useContext(ContextApi);

  //next handle function
  const handleNext = (values) => {
    setCompanyData((prev) => ({ ...prev, ...values }));
    if (stepCount === 0) {
      setStepCount((prev) => prev + 1);
    }
  };

  //prev handle function
  const handlePrev = (values) => {
    setCompanyData((prev) => ({ ...prev, ...values }));
    setStepCount((prev) => prev - 1);
  };

  //step render array
  const steps = [
    <StepOneForm next={handleNext} data={companyData} />,
    <StepTwoForm next={handleNext} data={companyData} prev={handlePrev} />,
  ];

  //stepper label
  const stepName = ["Company Details", "Values"];
  return (
    <Container>
      <Styles.Wrapper>
        <Styles.StepperUI>
          <Stepper activeStep={stepCount} alternativeLabel>
            {stepName.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Styles.StepperUI>
        {steps[stepCount]}
      </Styles.Wrapper>
    </Container>
  );
};
