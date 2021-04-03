import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button } from "@material-ui/core";
import TextError from "../TextError";
import {Alert} from 'react-bootstrap'

import StatusAlert from '../StatusAlert.js'

import {Helmet} from "react-helmet";



var faunadb = require('faunadb'),
  q = faunadb.query;
var client = new faunadb.Client({ secret: "fnAEC613dnACDVzFZUJQLZu_gxBkJVKTfHFzzQes" });




const OrderStatus = () => {



  const [isAccount, setIsAccount] = useState(false)
  const [isError, setIsError] = useState(false)
  const [accountValues, setAccountValues] = useState({});



  const showData = async (values) => {
    let result;
    try{
        result = await client.query( q.Get(q.Match(q.Index('orderByCode'), [values.orderCode])) );

    } catch(err){
      result = err
        console.log(err);
        setIsError(true)
    }
    return result
  };




  const initialValues = {
    orderCode: ""
  };

  const onSubmit = (values, onSubmitProps) => {
    (async () => {
      let data = await showData(values)
      setAccountValues(data);
      if(data){
        setIsAccount(true)
      }
    })()
  };

  const validationSchema = Yup.object({
    orderCode: Yup.string().required("Required")
      .max(9, "Your Entered Code is too Long, Please Check your Code!")
      .min(5, "Your Entered Code is too Short, Please Check your Code!")
  });




if (isAccount && !isError){
return <div className="container">
    <StatusAlert accountValues={accountValues} />
</div>
}




if (isAccount && isError){
    return <div className="container">
        <Alert variant="danger" style={{marginTop:"10px"}}>
                <Alert.Heading>Wrong Status Code!</Alert.Heading>
                <p>
                Please Check your Status Code and Try Again.
                </p>
                <hr />
                <p className="mb-0">
                If you have forgotten your Status Code Kindly Contact Us.
                </p>
            </Alert>
            </div>
    }


  return (
<React.Fragment>
<Helmet>
                <meta charSet="utf-8" />
                <title>Check Your Order Status</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <meta name="description" content="Check Your Order Status" />
            </Helmet>

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
            

      { (formik) => {
        return (
          <Form className="form">

            <h2 style={{fontSize:"35px", margin:"20px", textAlign:"center", color:"black"}}>    Check Your Order Status Here!     </h2>

            <Grid container spacing={3} justify="center">

              <Grid item sm={8} xs={10}>
                <Field
                  name="orderCode"
                  as={TextField}
                  label="Order Code"
                  variant="outlined"
                  helperText={<ErrorMessage name="orderCode" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <br />

              <Grid item sm={5} xs={8}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={formik.isSubmitting}
                  size="large"
                  fullWidth
                >
                  <span className="submitBtn">Check Status</span>
                </Button>
              </Grid>

            </Grid>

          </Form>
        );
      }}
    </Formik>
    </React.Fragment>
  );
};

export default OrderStatus;
