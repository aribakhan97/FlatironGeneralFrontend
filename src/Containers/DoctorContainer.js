import React from 'react'

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
                patients: patientList
            })
        })
    }


    render(){
        console.log(this.state)
        return  <h1> "Welcome Back Dr.Grey!" </h1>

    }

}

export default DoctorContainer