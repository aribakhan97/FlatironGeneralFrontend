import React from "react";
import Table from "react-bootstrap/Table";

class PatientList extends React.Component {
  render() {
      
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Floor/Room Number</th>
            <th>Patient Name</th>
            <th>Covid?</th>
            <th>Reason for Visit</th>
          </tr>
        </thead>
        <tbody>
         
              {
                this.props.patients.map(p => {
                    let covid=(p.has_covid) ? 'Covid Positive' : 'Covid Negative'
                    return (
                    <tr>
                    <td>{p.floor}</td>
                    <td>{p.name}</td>
                    <td>{covid}</td>
                    <td>{p.reason_for_visit}</td>
                    </tr>
                    )
                })
              }
            

        </tbody>
      </Table>
    );
  }
}

export default PatientList;
