import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  CardActions,
  Stepper,
} from "@material-ui/core";
import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikValues,
  FieldArray,
} from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import React, { useState } from "react";
import { mixed, number, object } from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Paper from '@material-ui/core/Paper';


// const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const emptySkills = { my_skill: "" };
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
}));

function MultiStepForm() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              firstName: "Default Value",
              lastName: "",
              millionaire: false,
              money: 0,
              description: "",
              progLanguages: ["C++", "Python", "JAVA"],
              techSkills: [
                "Coding Fast",
                "Copy Code From StackOverflow",
                "Coding While High",
              ],
            }}
            onSubmit={async (values) => {
              // await sleep(3000);
              console.log("values", values);
            }}
          >
            <FormikStep label="Personal Data">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="firstName"
                      component={TextField}
                      label="First Name"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="lastName"
                      component={TextField}
                      label="Last Name"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="address_1"
                      component={TextField}
                      label="Address Line 1"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="address_2"
                      component={TextField}
                      label="Address Line 2"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="city_name"
                      component={TextField}
                      label="City"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="state_name"
                      component={TextField}
                      label="State"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="pincode"
                      component={TextField}
                      label="Pincode"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="country_name"
                      component={TextField}
                      label="Country"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="email_address"
                      component={TextField}
                      label="Email Address"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="phone_number"
                      component={TextField}
                      label="Phone Number"
                    />
                  </Box>
                </Grid>
              </Grid>
            </FormikStep>
            <FormikStep label="Educational Background">
              <Grid container spacing={3}>
                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="school_name"
                      component={TextField}
                      label="High School Name"
                    />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="school_marks"
                      component={TextField}
                      label="High School Score (%)"
                    />
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="school_passing_year"
                      component={TextField}
                      label="Year Of Completion"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="college_name"
                      component={TextField}
                      label="College Name"
                    />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="college_marks"
                      component={TextField}
                      label="College Score (CGPA)"
                    />
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="college_passing_year"
                      component={TextField}
                      label="Year Of Completion"
                    />
                  </Box>
                </Grid>
              </Grid>
            </FormikStep>
            <FormikStep label="Skills, Achievements & Certifications">
              <Card className={classes.root} variant="outlined" >
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Known Programming Languages
                  </Typography>
                </CardContent>
                <CardContent>
                  <div className="form-control">
                    <FieldArray name="progLanguages">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { progLanguages } = values;
                        // console.log('fieldArrayProps', fieldArrayProps)
                        // console.log('Form errors', form.errors)
                        return (
                          <div>
                            <Grid container spacing={2}>
                              {progLanguages.map(
                                (progLanguage: string, index: number) => (
                                  <div key={index}>
                                    <Grid item xs={6}>
                                      <Box paddingBottom={2}>
                                        <Field
                                          name={`progLanguages[${index}]`}
                                          component={TextField}
                                          label={`Language-${index + 1}`}
                                        />
                                      </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                      <Box paddingBottom={2}>
                                        {index > 0 && (
                                          <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => remove(index)}
                                            startIcon={
                                              <RemoveCircleOutlineIcon />
                                            }
                                          >
                                            Remove
                                          </Button>
                                        )}
                                      </Box>
                                    </Grid>
                                  </div>
                                )
                              )}
                            </Grid>
                            <Box
                              paddingBottom={2}
                              textAlign="center"
                              paddingTop={5}
                            >
                              <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => push("")}
                              >
                                Add Programming Language
                              </Button>
                            </Box>
                          </div>
                        );
                      }}
                    </FieldArray>
                  </div>
                </CardContent>
              </Card>

              <br></br>

              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Technical Skills & Expertise
                  </Typography>
                </CardContent>
                <CardContent>
                  <div className="form-control">
                    <FieldArray name="techSkills">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { techSkills } = values;
                        // console.log('fieldArrayProps', fieldArrayProps)
                        // console.log('Form errors', form.errors)
                        return (
                          <div>
                            <Grid container spacing={0}>
                              {techSkills.map(
                                (techSkill: string, index: number) => (
                                  <div key={index}>
                                    <Grid item xs={12} >
                                    
                                      <Box paddingBottom={2} paddingRight = {4 }>
                                        <Field
                                          name={`techSkills[${index}]`}
                                          component={TextField}
                                          label={`Skill-${index + 1}`}
                                          style = {{width: 350}}
                                        />
                                      </Box>
                                    </Grid>

                                    <Grid item  xs ={12} >
                                      <Box paddingBottom={2} paddingLeft = {12}>
                                        {index > 0 && (
                                          <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => remove(index)}
                                            startIcon={
                                              <RemoveCircleOutlineIcon />
                                            }
                                          >
                                            Remove
                                          </Button>
                                        )}
                                      </Box>
                                    </Grid>
                                  </div>
                                )
                              )}
                            </Grid>
                            <Box
                              paddingBottom={2}
                              textAlign="center"
                              paddingTop={5}
                            >
                              <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => push("")}
                              >
                                Add Skills & Expertise
                              </Button>
                            </Box>
                          </div>
                        );
                      }}
                    </FieldArray>
                  </div>
                </CardContent>
              </Card>

              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Description"
                />
              </Box>
            </FormikStep>

            <FormikStep label="More Info">
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Description"
                />
              </Box>
            </FormikStep>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ values, isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2} justify="space-between">
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default MultiStepForm;
