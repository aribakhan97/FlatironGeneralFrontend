import React from 'react'
import NewPatientForm from '../Components/NewPatientForm'
import PatientList from '../Components/PatientList'
class DoctorContainer extends React.Component {

    
    state = {
        patients: [],
        highPriority: []
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


    render(){
        console.log(this.state)
        return  (
            <div>
                <h1> "Welcome Back Dr.Grey!" </h1>
                <NewPatientForm/>
                <PatientList patients={this.state.patients}/>
            </div>
        )
        
    }

}


export default DoctorContainer