import React from "react";
import Form from "react-bootstrap/Form";
import { Table, Button, ListGroup, Spinner } from "react-bootstrap";


class SearchMedication extends React.Component {
    state ={
        showInteraction: false,
        interactions: [],
        isSearching: false,
        medFound: false
    }


  searchRx = (e) => {
    e.preventDefault();
    let search = e.target[0].value.toLowerCase();
    this.setState({isSearching: true})
    fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${search}&search=0`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.idGroup.rxnormId) {
          let rxcui = data.idGroup.rxnormId[0];
          return fetch(
            `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=DrugBank`
          ).then((response) => response.json());
        }
      })
      .then((data) => {
          console.log(data)
        this.setState({
          showInteraction: true, 
          medFound: (data !== undefined),
          interactions: (data) ? data.interactionTypeGroup[0].interactionType[0].interactionPair : [],
          isSearching: false
      })});
  };

  render() {
    return (
      <div>
          <Form onSubmit={(e) => this.searchRx(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Medication Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {(this.state.showInteraction && this.state.medFound) && 
        <MedTable interactions={this.state.interactions} allergies={this.props.allergies} currentMedications={this.props.currentMedications}/> 
      }
    {(this.state.showInteraction && !this.state.medFound) &&
        <h4>Invalid search. Medication not found.</h4> 
    }

      {this.state.isSearching && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
    </div>
    );
  }
}

const MedTable = (props) => {
    let foundInteractions = props.interactions.filter((i) => {
        let name = i.interactionConcept[1].sourceConceptItem.name
        if (props.currentMedications && props.currentMedications.includes(name)) {
            return i;
        } else if (props.allergies && props.allergies.includes(name)) {
            return i;
        }
    })
    console.log('foundInteractions', foundInteractions)

    return(
        <div>
        {foundInteractions && 
        <Table striped bordered hover>
          <thead>
              <tr>
                  <th>Medication</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
          {foundInteractions.map(i =>{
            let name = i.interactionConcept[1].sourceConceptItem.name
              return (
            <tr style={{backgroundColor: '#FF0000'}}>
                <td>{name}</td>
                <td>{i.description}</td>
            </tr>
              )
        })}
          </tbody>
      </Table>}
      {foundInteractions.length === 0 &&
            <h5>No Interactions Found.</h5>
        }

      </div>
    )
} 
export default SearchMedication;
