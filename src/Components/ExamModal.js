import React from "react";
import ExamForm from './ExamForm'
import {Modal, Button} from "react-bootstrap"


export function ExamModal(props) {
    return (
      <Modal
      className='modal-color'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Exam Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ExamForm handleSubmit={props.handleSubmit} office={props.office}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }