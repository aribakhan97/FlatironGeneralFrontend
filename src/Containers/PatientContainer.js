import React from "react";
import { ExamModal } from "../Components/ExamModal";
import {
  Button,
  Jumbotron,
  Col,
  Image,
  Container,
  Row,
  Badge,
  ButtonGroup,
} from "react-bootstrap";
import ExamHistory from "../Components/ExamHistory";
import history from "../Components/history";
import Medication from "../Components/Medication";

const BASEURL = 'https://flatiron-general-hospital.herokuapp.com/'

class PatientContainer extends React.Component {
  state = {
    patient: {},
    isLoaded: false,
    showExamModal: false,
    exams: [],
    showMedication: false,
  };
  componentDidMount() {
    let id = window.location.pathname.split("/")[2];
    let options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    };
    fetch(BASEURL + '/patients/' + id, options)
      .then((response) => response.json())
      .then((p) => {
        console.log(p);
        this.setState({ patient: p.patient, exams: p.exams, isLoaded: true });
      });
  }
  toggleExamModal = (show) => {
    this.setState({ showExamModal: show });
  };

  toggleMedication = (show) => {
    this.setState({ showMedication: show });
  };

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let date = new Date(e.target[0].value).toISOString();
    let vitals = {
      height: e.target[1].value,
      weight: e.target[2].value,
      temperature: e.target[3].value,
      oxygen: e.target[4].value,
      bp: e.target[5].value,
      hr: e.target[6].value,
      rr: e.target[7].value,
    };
    let physical = {
      appearance: e.target[8].value,
      hs: e.target[9].value,
      ls: e.target[10].value,
      pupils: e.target[11].value,
      sp: e.target[12].value,
    };

    let diagnosis = e.target[13].value;
    let comments = e.target[14].value;

    let exam = {
      date: date,
      vitals: JSON.stringify(vitals),
      physical: JSON.stringify(physical),
      diagnosis: diagnosis,
      comments: comments,
      patient_id: this.state.patient.id,
    };
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(exam),
    };

    fetch("http://localhost:4000/exams/", options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ exams: [...this.state.exams, exam] });
      })
      .then(() => this.toggleExamModal(false));
  };

  render() {
    let patient = this.state.patient;
    console.log(patient);
    let profile = {};
    if (this.state.isLoaded) {
      profile = JSON.parse(patient.profile);
    }
    let covid =
      this.state.isLoaded && patient.has_covid
        ? "Covid Positive"
        : "Covid Negative";
    let covidBadge =
      this.state.isLoaded && patient.has_covid ? "danger" : "secondary";
    let smoking = this.state.isLoaded && patient.profile.smoking ? "Yes" : "No";
    return (
      <div className="page-background">
        <ButtonGroup>
          <Button className="button-color" onClick={() => history.push("/")}>
            Back
          </Button>

          <Button
            className="button-color"
            variant="primary"
            onClick={() => this.toggleExamModal(true)}
          >
            Add New Exam
          </Button>
          <Button
            className="button-color"
            variant="primary"
            onClick={() => this.toggleMedication(true)}
          >
            Check Interactions
          </Button>
        </ButtonGroup>

        {this.state.isLoaded && (
          <div>
            <Jumbotron>
              <Container className="patient-jumbotron">
                <Row>
                  <Col sm>
                    <h1> {patient.name} </h1>
                  </Col>
                  <Col sm>
                    <p>
                      {patient.age} {patient.gender}{" "}
                    </p>
                    <Badge variant={covidBadge}>{covid}</Badge>
                  </Col>
                  <Col className="patient-img" sm>
                    <Image
                      style={{ width: "171px", height: "180px" }}
                      src={patient.image}
                      rounded
                    />
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
            <Container className="patient-info">
              <Row>
                <Col className="info-border">
                  <h4> Patient Medical History </h4>
                  <p>
                    {" "}
                    Current Medications:{" "}
                    {profile.current_medications.map((m) => m + " ")}{" "}
                  </p>
                  <p>
                    {" "}
                    Medical Conditions:{" "}
                    {profile.medical_conditions.map((c) => c + " ")}{" "}
                  </p>
                  <p> Allergies to Medications: {profile.allergies}</p>
                  <p> Surgical History: {profile.surgeries} </p>
                  <p>
                    {" "}
                    History of Hypertension or Diabetes in Mom or Dad?{" "}
                    {profile.history}{" "}
                  </p>
                  <p> Smoke or use Tobacco Products? {smoking} </p>
                </Col>
                <Col className="info-border">
                  <h4> Most Recent Vitals </h4>
                  {profile.vitals &&
                  <div>
                  <p> Height in inches: {profile.vitals.height}</p>
                  <p> Weight in pounds: {profile.vitals.weight}</p>
                  <p>
                    {" "}
                    Temperature in Fahrenheit: {profile.vitals.temperature}
                  </p>
                  <p> Oxygen: {profile.vitals.oxygen}</p>
                  <p> Blood Pressure: {profile.vitals.bp}</p>
                  <p> Heart Rate: {profile.vitals.hr}</p>
                  <p> Respiratory Rate: {profile.vitals.rr}</p></div>}
                </Col>
              </Row>
            </Container>
            <ExamModal
              handleSubmit={this.handleSubmit}
              onHide={() => this.toggleExamModal(false)}
              show={this.state.showExamModal}
            />
            <Medication
              onHide={() => this.toggleMedication(false)}
              show={this.state.showMedication}
              allergies={profile.allergies}
              currentMedications={profile.current_medications}
            />
            <ExamHistory exams={this.state.exams} />
          </div>
        )}
      </div>
    );
  }
}

export default PatientContainer;
