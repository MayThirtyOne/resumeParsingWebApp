import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Form, Formik } from 'formik';  

import React, { PureComponent } from 'react'
import { array, object, string } from 'yup';
import { MultipleFileUploadField } from '../../upload/MultipleFileUploadField';





export class UploadResumeContent extends PureComponent {
    render() {
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
            console.log('values', values);
            return new Promise((res) => setTimeout(res, 2000));
          }}
        >
          {({ values, errors, isValid, isSubmitting }) => (
            <Form>
              <Grid container spacing={3} direction="column" justify = "center" >
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
}

export default UploadResumeContent
