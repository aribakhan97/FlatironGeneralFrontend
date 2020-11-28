import React from "react";
import Form from "react-bootstrap/Form";
import { Table, Button, ListGroup } from "react-bootstrap";


class SearchMedication extends React.Component {
    state ={
        showInteraction: false,
        interactions: [],
    }


  searchRx = (e) => {
    e.preventDefault();
    let search = e.target[0].value.toLowerCase();
    fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${search}&search=0`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.idGroup.rxnormId) {
          let rxcui = data.idGroup.rxnormId[0];
          return fetch(
            `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=ONCHigh`
          ).then((response) => response.json());
        }
      })
      .then((data) => this.setState({
          showInteraction: true, 
          interactions: data.interactionTypeGroup[0].interactionType[0].interactionPair
      }));
  };

  render() {
    return (
      <div>
          <Form onSubmit={(e) => this.searchRx(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Search Medication</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {this.state.showInteraction && 
      <MedTable interactions={this.state.interactions}/> 
        }
              </div>
    );
  }
}
const MedTable = (props) => {
    return(
        <Table striped bordered hover>
          <thead>
              <tr>
                  <th>
                      Medication
                  </th>
                  <th>
                      Severity
                  </th>
              </tr>
          </thead>
          <tbody>
          {props.interactions.map(i =>{
            return(
                <tr>
                <td>
                    {i.interactionConcept[1].sourceConceptItem.name}
                </td>
                <td>
                    {i.severity}
                </td>
                </tr>
            )
        })}

          </tbody>
      </Table>
    )
} 
export default SearchMedication;
