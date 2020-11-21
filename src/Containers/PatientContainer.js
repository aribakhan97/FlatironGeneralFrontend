import React from 'react'
import ExamForm from '../Components/ExamForm'

class PatientContainer extends React.Component {

    render(){
        let patient=this.props.patient
        let covid=(patient.has_covid) ? 'Covid Positive' : 'Covid Negative'
        let smoking = (patient.profile.smoking) ? 'Yes' : 'No'
        return  (
            <div> 
                <h1> {patient.name} {patient.age} {patient.gender} {covid} </h1>
                <h4> Patient Medical History </h4>
                <p> Current Medications: {patient.profile.current_medications.map(m => m + ' ') } </p>
                <p> Medical Conditions: {patient.profile.medical_conditions.map (c => c + ' ')} </p>
                <p> Allergies to Medications: {patient.profile.allergies}</p>
                <p> Surgical History: {patient.profile.surgeries} </p>
                <p> History of Hypertension or Diabetes in Mom or Dad? {patient.profile.history} </p>
                <p> Smoke or use Tobacco Products? {smoking} </p>

                <h4> Patient Vitals </h4>
                <p> Height in inches: {patient.profile.vitals.height}</p>
                <p> Weight in pounds: {patient.profile.vitals.weight}</p>
                <p> Temperature in Fahrenheit: {patient.profile.vitals.temperature}</p>
                <p> Oxygen: {patient.profile.vitals.oxygen}</p>
                <p> Blood Pressure: {patient.profile.vitals.bp}</p>
                <p> Heart Rate: {patient.profile.vitals.hr}</p>
                <p> Respiratory Rate: {patient.profile.vitals.rr}</p>
                

                <ExamForm/>
                
            </div>
        )
    }


}

export default PatientContainer