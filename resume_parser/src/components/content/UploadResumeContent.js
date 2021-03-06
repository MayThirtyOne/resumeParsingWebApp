import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Form, Formik } from 'formik';

import React, { PureComponent } from 'react'
import { array, object, string } from 'yup';
import { MultipleFileUploadField } from '../../upload/MultipleFileUploadField';
import { useAuth0 } from "@auth0/auth0-react";





function UploadResumeContent() {

  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <div>

      <Card>
        <CardContent>
          <Formik
            initialValues={{ files: [] }}
            validationSchema={object({
              files: array(
                object({
                  url: string().required(),
                })
              ),
            })}
            onSubmit={(values) => {
              var parsedValues = '';
              console.log('values', values.files[0].url);
              const input = { pdfURL: values.files[0].url, email:user.email };
              const backendURL = "https://backend.rankresu.me/parsePDF/";
              fetch(backendURL, {
                method: 'POST',
                body: JSON.stringify(input),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(res => res.json())
                .then(response => console.log('Success:', (response)))
                .catch(error => console.error('Error:', error));

              return new Promise((res) => setTimeout(res, 2000));
            }}
          >
            {({ values, errors, isValid, isSubmitting }) => (
              <Form>
                <Grid container spacing={3} direction="column" justify="center" >
                  <MultipleFileUploadField name="files" />

                  <Grid item >
                    <Button


                      variant="contained"
                      color="primary"
                      disabled={!isValid || isSubmitting}
                      type="submit"
                    >
                      Submit
                  </Button>
                  </Grid>
                </Grid>

                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>

    </div>
  )
}


export default UploadResumeContent
