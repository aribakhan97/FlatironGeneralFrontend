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
    
    handleSubmit = (e) => {
        console.log("hey", e)
        e.preventDefault()
        let name = e.target[0].value
        let gender = e.target[1].value
        let birthday = e.target[2].value
        let age = e.target[3].value
        let address = e.target[4].value
        let home = e.target[5].value
        let cell = e.target[6].value
        let insurance = e.target[7].value
        let emergency = e.target[8].value
        let relationship = e.target[9].value
        let emergencyNumber = e.target[10].value
        let comments = e.target[11].value

        let newPatientObject = {
            name: name, 
            age: age,
            gender: gender,
            has_covid: false,
            reason_for_visit: '',
            comments: comments,
            floor: ' ',
            office_id: this.props.office.id,
            profile:{
                personalInfo:{
                    birthday: birthday,
                    address: address,
                    home: home,
                    cell: cell,
                    insurance: insurance,
                    emergency: emergency,
                    relationship: relationship,
                    emergencyNumber: emergencyNumber,
                    
                },
              current_medications: [], 
              medical_conditions: [],
              allergies: [],
              surgeries: [],
              history: [],
              smoking: false,
            }
        }
        let options = {
            method: "POST" ,
            headers:{
              "content-type" : "application/json",
              "accept" : "application/json"
            },
            body: JSON.stringify(newPatientObject)
          }

          fetch('http://localhost:4000/patients/', options)
          .then(response => response.json())
          .then(data => {
            this.setState({patients: [...this.state.patients,data]})
          })
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
                <NewPatientModal onFormSubmit={this.handleSubmit} office={this.props.office} onHide={()=> this.toggleNewPatientModal(false)} show={this.state.showNewPatientModal}/>
                <PatientList patients={this.state.patients}/>
                <Button variant="primary" onClick={() => this.toggleNewPatientModal(true)}>
                    Add New Patient
                </Button>
            </div>
        )
        
    }

}


export default DoctorContainer