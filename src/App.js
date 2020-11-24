import React from 'react'
import './App.css';
import DoctorContainer from './Containers/DoctorContainer'
import PatientContainer from './Containers/PatientContainer'
import history from './Components/history'
import LoginContainer from './Containers/LoginContainer'

import {
  Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

function getOffice (){
  return{id:1}
}
function getDoctor() {
  return {id:1}
  //come back to this when we go login to get the actual doc ID
}

const patient={
  name:'Cristina Yang', 
  age: 28,
  gender: 'Female',
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
class App extends React.Component {

  state={
    isLoggedIn: false,
    doctor: null
  }
 logout = () => {
   this.setState({isLoggedIn:false})
   history.push('/')
 }
  handleLogin = (e) => {
    e.preventDefault()
    console.log(e)
    let username = e.target[0].value
    let password = e.target[1].value
    let options = {
      method: "POST" ,
      headers:{
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify({username:username, password:password})
    }

    fetch('http://localhost:4000/login', options)
    .then(response => response.json())
    .then(data => {
      if(data.isLoggedIn){
        this.setState({isLoggedIn: data.isLoggedIn, doctor:data.doctor})
      }
      else{
        this.setState({isLoggedIn: data.isLoggedIn})
      }
    })

  }
  
  render(){
  return (

    <div className="App">
      <Router forceRefresh={true} history={history}> 
      <Switch>
      <Route exact path="/">
            {this.state.isLoggedIn ? <Redirect to='/home'/> : <LoginContainer handleLogin={this.handleLogin} loggedIn = {this.loggedIn}/> }
          </Route>
        <Route path="/home" render={() => <DoctorContainer logout={this.logout} office={getOffice()} doctor={this.state.doctor}/> }/>
          <Route path="/patients" render={() => <PatientContainer patient={patient}/> }/>
          </Switch>
      </Router>
    </div>
  );}
}


export default App;
