/* eslint-disable react/jsx-key */
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";

const steps = [
  "Step 1 : Cart Review",
  "Step 2 : Checkout",
  "Step 3 : Special Offer",
  "Step 4 : Confirmation",
];

const stepIcons = [
  <CheckCircle
    fontSize="small"
    style={{ color: "green" }}
  />,
  <CheckCircle
    fontSize="small"
    style={{ color: "green" }}
  />,
  <img
    src="src\assets\step3.svg"
    style={{ width: "28px", height: "20px" }}
    alt="Custom Icon"
  />,
  <img
    src="src\assets\step4.svg"
    style={{ width: "28px", height: "20px" }}
    alt="Custom Icon"
  />,
];

export function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(3);
  const [skipped, setSkipped] = React.useState(new Set());

  // eslint-disable-next-line no-unused-vars
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
              key={label}
              {...stepProps}
            >
              <StepLabel
                {...labelProps}
                icon={stepIcons[index]}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={() => setActiveStep(0)}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Box>
  );
}
