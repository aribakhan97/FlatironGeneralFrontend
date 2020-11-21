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
                patients: [...patientList,patient]
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
const patient={
    name:'Cristina Yang', 
    age: 28,
    gender: 'Female',
    floor: 'Floor 2 Room 205',
    has_covid: false,
    reason_for_visit: 'Abdominal Pain',
    profile:{
      current_medications: ['Losartan'], 
      medical_conditions: ['Hypertension'],
      allergies: ['Penicillin'],
      surgeries: ['Appendectomy'],
      history: ['No History'],
      smoking: false,
      vitals: {
        height: 64,
        weight: 117,
        temperature: 98.6,
        oxygen: 99,
        bp: '118/84',
        hr: 72,
        rr: 16,
      }
    }
  }
  
export default DoctorContainer