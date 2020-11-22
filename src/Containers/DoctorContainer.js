import React from 'react'
import {NewPatientModal} from '../Components/NewPatientModal'
import PatientList from '../Components/PatientList'
import {Button} from "react-bootstrap"

class DoctorContainer extends React.Component {

    
    state = {
        patients: [],
        highPriority: [],
        showNewPatientModal: false
    }
    
    componentDidMount(){
        fetch('http://localhost:4000/patient_list/' + this.props.doctor.id)
        .then(response => response.json())
        .then(patientList => {
            this.setState({
                patients: [...patientList]
            })
        })
    }

    toggleNewPatientModal = (show) =>{
        console.log("HEYY", show)
        this.setState({showNewPatientModal:show})
    }

    render(){
        console.log(this.state)
        return  (
            <div>
                <h1> "Welcome Back Dr.Grey!" </h1>
                <NewPatientModal onHide={()=> this.toggleNewPatientModal(false)} show={this.state.showNewPatientModal}/>
                <PatientList patients={this.state.patients}/>
                <Button variant="primary" onClick={() => this.toggleNewPatientModal(true)}>
                    Add New Patient
                </Button>
            </div>
        )
        
    }

}


export default DoctorContainer