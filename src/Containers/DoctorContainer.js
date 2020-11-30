import React from 'react'
import {NewPatientModal} from '../Components/NewPatientModal'
import PatientList from '../Components/PatientList'
import {Button, Jumbotron} from "react-bootstrap"
import Search from '../Components/Search'


class DoctorContainer extends React.Component {

    
    state = {
        patients: [],
        searchQuery: '',
        highPriority: [],
        showNewPatientModal: false
    }
    
    searchHandler = (e) => {
        // console.log(this.state.patients)
        this.setState({searchQuery: e.target.value})
    }

    updatePatient = (p) => {
        let options = {
            method: "PATCH" ,
            headers:{
              "content-type" : "application/json",
              "accept" : "application/json"
            },
            body: JSON.stringify(p)
          }
        
        fetch('http://localhost:4000//patients/' + p.id, options)
        .then(response => response.json())
    }

    addPriority = (p) => {
        if(!this.state.highPriority.some(patient=> patient.id === p.id)){
            this.setState({highPriority: [...this.state.highPriority, p]})
            p['priority'] = true
            this.updatePatient(p)
        }
    }

    removePatient = (p) => {
        let remove = this.state.patients.filter(patient=> patient.id !== p.id)
        console.log(remove)
        this.setState({patients:remove})

        let options = {
            method: "DELETE" ,
            headers:{
              "content-type" : "application/json",
              "accept" : "application/json"
            },
          }

          fetch('http://localhost:4000/patients/' + p.id, options)
          .then(response => response.json())
    } 

    removePriority = (p) => {
        let remove = this.state.highPriority.filter(patient=> patient.id !== p.id)
        this.setState({highPriority:remove})
        p['priority'] = false
        this.updatePatient(p)
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
        let covid = e.target[12].value
        let visit = e.target[13].value
        let room = e.target[14].value
        let image = e.target[15].value

        let newPatientObject = {
            name: name, 
            age: age,
            gender: gender,
            has_covid: (covid ==='Covid Positive'),
            reason_for_visit: visit,
            comments: comments,
            priority: false,
            floor: room,
            office_id: this.props.office.id,
            image: image,
            profile: JSON.stringify({
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
            })
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
          }).then(() => this.toggleNewPatientModal(false))
    }
    componentDidMount(){
        fetch('http://localhost:4000/patient_list/' + this.props.doctor.id)
        .then(response => response.json())
        .then(patientList => {
            this.setState({
                patients: [...patientList]
            })
        })
        .then(r=>{
            let priority = this.state.patients.filter((p) => p.priority)
            this.setState({highPriority: priority})
        })
    }

    toggleNewPatientModal = (show) =>{
        console.log("HEYY", show)
        this.setState({showNewPatientModal:show})
    }

    render(){
        let filteredPatients = this.state.patients.filter(p => {
            return p.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })

        return  (
            <div className='page-background'>
                <Button className='button-color' onClick={() => this.props.logout()}>
                    Logout
                </Button>

                <Jumbotron className='doctor-jumbotron'> <h1> Welcome Back {this.props.doctor.name} </h1></Jumbotron>
                <Search searchHandler={this.searchHandler}/>
                <NewPatientModal onFormSubmit={this.handleSubmit} office={this.props.office} onHide={()=> this.toggleNewPatientModal(false)} show={this.state.showNewPatientModal}/>
                <h1> Here is a list of all your patients {this.props.doctor.name}</h1>
                <h4> In order to add patient to High Priority List click on Patient Name</h4>
                <Button className='button-color' variant="primary" onClick={() => this.toggleNewPatientModal(true)}>
                    Add New Patient
                </Button>
                <PatientList removeButton={this.removePatient} addPriority={this.addPriority} patients={filteredPatients}/>
                <h1> High Priority Patients</h1>
                <PatientList removeButton={this.removePriority} isPriorityTable={true} patients={this.state.highPriority}/>
            </div>
        )
        
    }

}


export default DoctorContainer