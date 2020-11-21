import React from "react"
import Form from 'react-bootstrap/Form'
class NewPatientForm extends React.Component {

    render() {
    
    return (<div> <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Full Name </Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
            <option> Female </option>
            <option> Male </option>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Birthdate </Form.Label>
            <Form.Control type="text" placeholder="xx-xx-xxxx" />
        </Form.Group>
    
        
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Age </Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Complete Address </Form.Label>
            <Form.Control type="text" placeholder="Street, City, Zipcode" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Home Phone </Form.Label>
            <Form.Control type="text" placeholder="(xxx)xxx-xxxx" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Cell Phone </Form.Label>
            <Form.Control type="text" placeholder="(xxx)xxx-xxxx" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Insurance</Form.Label>
            <Form.Control as="select">
            <option> Aetna </option>
            <option> MVP </option>
            <option> Emblem Health </option>
            <option> Oxford </option>
            <option> BCBS </option>
            <option> Guardian </option>
            <option> Other </option>
            </Form.Control>
        </Form.Group>
    
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> In Case of Emergency Contact Name </Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Relationship </Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Emergency Contact Phone Number </Form.Label>
            <Form.Control type="text" placeholder="(xxx)xxx-xxxx" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional Comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form></div>)
    }
    }
    
    export default NewPatientForm