import './App.css';
import DoctorContainer from './Containers/DoctorContainer'
import PatientContainer from './Containers/PatientContainer'
import { createBrowserHistory} from 'history'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const history = createBrowserHistory()

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
function App() {
  return (
    <div className="App">
      <Router history={history}> 
      <Switch>
        <Route path="/" exact render={() => <DoctorContainer office={getOffice()}doctor={getDoctor()}/> }/>
          <Route path="/patients" render={() => <PatientContainer patient={patient}/> }/>
          </Switch>
      </Router>
    </div>
  );
}


export default App;
