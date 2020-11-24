import React from "react";
import { Card, Accordion } from "react-bootstrap";

class ExamHistory extends React.Component {
  render() {
      console.log(this.props.exams)
      let exams = this.props.exams
      console.log(exams)
    return (
      <Accordion defaultActiveKey="0">
        {exams.map((e, i) => {
            let vitals = convertToJsonObject(e.vitals)
            console.log('vitals', vitals)
            let physical = convertToJsonObject(e.physical)
            console.log('physical', physical)

          return (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={""+ i}>
                Exam {new Date(e.date).toDateString()}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={"" + i}>
                <Card.Body>
                    <h2>Vitals</h2>
                    <p>Height: {vitals.height}</p>
                    <p>Weight: {vitals.weight}</p>
                    <p>Temperature: {vitals.temperature}</p>
                    <p>Oxygen: {vitals.oxygen}</p>
                    <p>Blood Pressure: {vitals.bp}</p>
                    <p>Heart Rate: {vitals.hr}</p>
                    <p>Respiratory Rate: {vitals.rr}</p>
                    
                    <h2>Physical Exam</h2>
                    <p>Overall Appearance: {physical.appearance}</p>
                    <p> Heart Sounds: {physical.hs}</p>
                    <p> Lung Sounds: {physical.ls}</p>
                    <p> Pupils: {physical.pupils}</p>
                    <p>Stomach Palpation: {physical.sp}</p>
                    <h2>Doctors Notes</h2>
                    <p>Diagnosis: {e.diagnosis}</p>
                    <p>Comments: {e.comments}</p>


                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}

function convertToJsonObject(obj) {
  if (IsJsonString(obj)) {
    return JSON.parse(obj)
  } else if (isObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isObject(obj)
{
    return obj !== undefined && obj !== null && obj.constructor == Object;
}


export default ExamHistory;
