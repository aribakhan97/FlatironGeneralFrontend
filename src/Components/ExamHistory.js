import React from "react";
import { Card, Accordion } from "react-bootstrap";

class ExamHistory extends React.Component {
  render() {
      console.log(this.props.exams)
    return (
      <Accordion defaultActiveKey="0">
        {this.props.exams.map((e, i) => {
          return (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={""+ i}>
                Exam {new Date(e.date).toDateString()}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={"" + i}>
                <Card.Body>
                    Diagnosis: {e.diagnosis}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}

export default ExamHistory;
