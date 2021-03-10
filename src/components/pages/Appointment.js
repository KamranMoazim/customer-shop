import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button } from "@material-ui/core";
import TextError from "../TextError";

import {useRouteMatch} from 'react-router-dom';

import AppointmentModal from '../AppointmentModal.js'

import {Helmet} from "react-helmet";


var faunadb = require('faunadb'),
  q = faunadb.query;

// const nodemailer = require("nodemailer");


function generateCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const code = generateCode(7)


let initialValues = {
    name:"",
    itemCodes:"",
    email:"",
    whatsApp:"",
    address:"",
    city:"",
    zip:""
};

let itemCodeWorker;
let worker1 = 0;

const onSubmit = (values, onSubmitProps) => {

    // console.log(values);
    // console.log(code);
    const savetoFauna = async()=>{
    // var client = new faunadb.Client({ secret: "fnAEC613dnACDVzFZUJQLZu_gxBkJVKTfHFzzQes" });
    var client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_DB_KEY });
        try{
            const result = await client.query(
                q.Create(q.Collection("orders"),{data:{status:"pending", orderCode:code, ...values}})
        );
        console.log(result);
        itemCodeWorker=""
    } catch(err){
        console.log(err);
    }
        
        }

      savetoFauna()

      worker1 = 1;
    

  alert(`Your Form has submitted Successfully! Your Order Code is ${code}`);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};



const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    itemCodes: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    whatsApp: Yup.string().required("Required")
    .max(14, "Your added number is too large.")
    .min(11, "Your added number is too small."),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required")
});



const Appointment = () => {

  let { url } = useRouteMatch();
  let required = url.split(":")
  // console.log(required);

  let newRequired2 = required[required.length - 1] // code
  newRequired2 = newRequired2.replace(" ", "")
  // console.log(newRequired2)

  itemCodeWorker = newRequired2;


  const [show, setShow] = useState(false);
  // const [show1, setShow1] = useState(false);

  const handleModal = () => setShow(!show);    

  if (itemCodeWorker!=="/appointment") {
      initialValues = {
        name:"",
        itemCodes:itemCodeWorker,
        email:"",
        whatsApp:"",
        address:"",
        city:"",
        zip:""
    };
  }
  

  return (
<>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Make Appointment</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          {/* <meta name="description" content="hfkjs dhjfh hkjs" /> */}
      </Helmet>


    <Formik
      initialValues={initialValues}
      onSubmit={
        onSubmit
      }
      validationSchema={validationSchema}
    >

      { (formik) => {
        
        return (
          <Form className="form">

            <h2 style={{fontSize:"35px", margin:"20px", textAlign:"center", color:"black"}}>Appointment Form</h2>

            <Grid container spacing={3} justify="center">

              <Grid item sm={4} xs={5}>
                <Field
                  name="name"
                  as={TextField}
                  label="Your Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="name" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={4} xs={5}>
                <Field
                  className="sField"
                  name="itemCodes"
                  as={TextField}
                  label="Item Code(s)"
                  variant="outlined"
                  helperText={<ErrorMessage name="itemCodes" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="email"
                  as={TextField}
                  label="E-mail"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="whatsApp"
                  as={TextField}
                  label="Active WhatsApp"
                  variant="outlined"
                  helperText={<ErrorMessage name="whatsApp" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="address"
                  as={TextField}
                  label="Address"
                  variant="outlined"
                  helperText={<ErrorMessage name="address" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="city"
                  as={TextField}
                  label="City"
                  variant="outlined"
                  helperText={<ErrorMessage name="city" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="zip"
                  as={TextField}
                  label="Zip Code"
                  variant="outlined"
                  helperText={<ErrorMessage name="zip" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                {show&worker1? <AppointmentModal code={code} color="success" />: <AppointmentModal color="danger" text="Make Appointment" />}
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
                  onClick={()=>handleModal()}
                >
                  <span className="submitBtn">Make Appointment</span>
                </Button>
                
              </Grid>

            </Grid>

          </Form>
        );
      }}
    </Formik>
</>
  );

};

export default Appointment;
