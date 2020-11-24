import React from "react";
import {Table, Button, ButtonGroup} from "react-bootstrap";
import history from './history'
import {withRouter} from 'react-router'


class PatientList extends React.Component {
  render() {
      let removeButton = this.props.isPriorityTable? 'Remove Priority': 'Remove'
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Floor/Room Number</th>
            <th>Patient Name</th>
            <th>Covid?</th>
            <th>Reason for Visit</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
         
              {
                this.props.patients.map(p => {
                    let covid=(p.has_covid) ? 'Covid Positive' : 'Covid Negative'
                    return (
                    <tr onClick={() => {
                      if(!this.props.isPriorityTable){
                        this.props.addPriority(p)
                      }
                      }}>
                      <td>{p.floor}</td>
                      <td>{p.name}</td>
                      <td>{covid}</td>
                      <td>{p.reason_for_visit}</td>
                      <td>
                        <ButtonGroup>
                        <Button variant='danger' size='sm' onClick={(e) => {
                          e.stopPropagation()
                          this.props.removeButton(p)
                          }}>
                          {removeButton}
                        </Button>
                        <Button size='sm' onClick={(e) =>{
                          e.stopPropagation()
                          history.push('/patients/' + p.id)
                        }}>
                          Chart
                        </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    )
                })
              }
            

        </tbody>
      </Table>
    );
  }
}

export default withRouter(PatientList)
