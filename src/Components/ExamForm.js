import React from "react"
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "react-bootstrap"

class ExamForm extends React.Component {
    state = {
        startDate: new Date()
    }

    setStartDate = (date) => {
        this.setState({startDate: date})
    }
render() {
    console.log(this.state.startDate	)
return (<div> <Form onSubmit={(e)=>this.props.handleSubmit(e)}>


    <Form.Group controlId="exampleForm.ControlInput1">
    <   Form.Label> Date </Form.Label>
        <DatePicker selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
    </Form.Group>



    <Form.Group controlId="exampleForm.ControlInput1">
        <h3> Vitals</h3> 
        <Form.Label> Height </Form.Label>
        <Form.Control type="text" placeholder="Height..." />
        <Form.Label> Weight</Form.Label>
        <Form.Control type="text" placeholder="Weight..." />
        <Form.Label> Temperature </Form.Label>
        <Form.Control type="text" placeholder="Temperature..." />
        <Form.Label> Oxygen </Form.Label>
        <Form.Control type="text" placeholder="Oxygen..." />
        <Form.Label> Blood Pressure </Form.Label>
        <Form.Control type="text" placeholder="Blood Pressure.." />
        <Form.Label> Heart Rate </Form.Label>
        <Form.Control type="text" placeholder="Heart Rate..." />
        <Form.Label> Respiratory Rate </Form.Label>
        <Form.Control type="text" placeholder="Respiratory Rate..." />
    </Form.Group>


    <h3>Physical Exam</h3>
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
        <Form.Label>Diagnosis</Form.Label>
        <Form.Control as="textarea" rows={1} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Additional Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button variant='primary' type='submit'> 
            Submit
            </Button>
    </Form></div>)
}
}

export default ExamForm