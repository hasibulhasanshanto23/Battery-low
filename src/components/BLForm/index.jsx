"use client";
import React, { useState } from "react";
import { StepOneForm } from "../StepOne";
import { StepTwoForm } from "../StepTwo";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as Styles from "./index.styles";

export const BLForm = () => {
  //step count  STATE
  const [stepCount, setStepCount] = useState(0);

  //company data STATE
  const [companyData, setCompanyData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    max_X: "",
    max_Y: "",
    max_Z: "",
    min_X: "",
    min_Y: "",
    min_Z: "",
  });

  //next handle function
  const handleNext = (values) => {
    setCompanyData((prev) => ({ ...prev, ...values }));
    setStepCount((prev) => prev + 1);
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
  const stepName = [
    'Company Details',
    'Values',
  ];
  return <Styles.Wrapper>
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
    </Styles.Wrapper>;
};




