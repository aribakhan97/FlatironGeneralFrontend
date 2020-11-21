import React from "react"
import Form from 'react-bootstrap/Form'

class ExamForm extends React.Component {

render() {

return (<div> <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label> Overall Appearance </Form.Label>
        <Form.Control type="text" placeholder="Overall Appearance..." />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Heart Sounds</Form.Label>
        <Form.Control as="select">
        <option> Select from Below </option>
        <option> Tachycardic </option>
        <option> Normal rate and rhythm</option>
        <option> Bradycardic </option>
        </Form.Control>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Lung Sounds</Form.Label>
        <Form.Control as="select">
        <option> Select from Below </option>
        <option> Wheezing </option>
        <option> Normal lung sounds, no murmurs, rubs, or gallops</option>
        <option> Rhonchi </option>
        <option> Stridor </option>
        <option> Crackles </option>
        </Form.Control>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Pupils</Form.Label>
        <Form.Control as="select">
        <option> Select from Below </option>
        <option> PEARRL- Equal,Round, and Reactive to Light </option>
        <option> Pupils are NOT Equal,Round, and Reactive to Light </option>
        </Form.Control>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Stomach Palpation </Form.Label>
        <Form.Control as="select">
        <option> Select from Below </option>
        <option> Stomach is soft, nondistended, no rebound or guarding </option>
        <option> Rebound and Guarding </option>
        </Form.Control>
    </Form.Group>


    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Additional Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Form></div>)
}
}

export default ExamForm