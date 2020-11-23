import React from 'react'
import { useParams } from 'react-router-dom'
import ExamForm from '../Components/ExamForm'

class PatientContainer extends React.Component {

    state = {
        patient: {},
        isLoaded: false
    }
    componentDidMount(){
        let id=window.location.pathname.split('/')[2]
        console.log(id)
        fetch('http://localhost:4000/patients/'+ id)
        .then(response => response.json())
        .then(p => {
            console.log(p)
            this.setState({patient: p, isLoaded: true })
    })
  }

    render(){

        let patient=this.state.patient
        console.log(patient)
        let profile = {}
        if(this.state.isLoaded){
            profile = JSON.parse(patient.profile)
        }
        let covid=(this.state.isLoaded && patient.has_covid) ? 'Covid Positive' : 'Covid Negative'
        let smoking = (this.state.isLoaded && patient.profile.smoking) ? 'Yes' : 'No'
        return  (
            <div> 

            {this.state.isLoaded &&
            <div> 
                <h1> {patient.name} {patient.age} {patient.gender} {covid} </h1>
                <h4> Patient Medical History </h4>
                <p> Current Medications: {profile.current_medications.map(m => m + ' ') } </p>
                <p> Medical Conditions: {profile.medical_conditions.map (c => c + ' ')} </p>
                <p> Allergies to Medications: {profile.allergies}</p>
                <p> Surgical History: {profile.surgeries} </p>
                <p> History of Hypertension or Diabetes in Mom or Dad? {profile.history} </p>
                <p> Smoke or use Tobacco Products? {smoking} </p>

                <h4> Patient Vitals </h4>
                <p> Height in inches: {profile.vitals.height}</p>
                <p> Weight in pounds: {profile.vitals.weight}</p>
                <p> Temperature in Fahrenheit: {profile.vitals.temperature}</p>
                <p> Oxygen: {profile.vitals.oxygen}</p>
                <p> Blood Pressure: {profile.vitals.bp}</p>
                <p> Heart Rate: {profile.vitals.hr}</p>
                <p> Respiratory Rate: {profile.vitals.rr}</p>
                

                <ExamForm/>
                
            </div>}
            </div>
        )
    }


}

export default PatientContainer