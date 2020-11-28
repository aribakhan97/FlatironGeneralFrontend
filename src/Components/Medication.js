import React from "react";
import {Modal, Button} from "react-bootstrap"
import SearchMedication from "./SearchMedication";


export function Medication(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Search Medication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SearchMedication allergies={props.allergies} currentMedications={props.current_medications}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Medication;
