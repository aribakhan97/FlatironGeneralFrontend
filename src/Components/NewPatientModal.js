import React from "react";
import NewPatientForm from './NewPatientForm'
import {Modal, Button} from "react-bootstrap"


export function NewPatientModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Patient Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <NewPatientForm onFormSubmit={props.onFormSubmit} office={props.office}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }