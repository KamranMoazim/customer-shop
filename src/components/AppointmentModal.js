import React from 'react'
import {Modal,Alert} from 'react-bootstrap'

function AppointmentModal({code="", color="", text=""}) {

    return (
        <>
          <Modal.Header>
            <Modal.Title>{text?text:"Your Appointment Code is"}</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1>{code}</h1></Modal.Body>
          <Alert variant={color}>
          {text?"Fill the Form and Get your Order ID":"Please Note your Appointment Code to check your Status Lately!"}
          </Alert>
      </>
    )
}

export default AppointmentModal
