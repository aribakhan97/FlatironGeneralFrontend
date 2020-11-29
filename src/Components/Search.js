import React from "react";
import {InputGroup, FormControl} from "react-bootstrap"


class Search extends React.Component {
  render() {
    return (
      <InputGroup className="mb-3" onChange={(e) => this.props.searchHandler(e)}>
        <InputGroup.Prepend>
          <InputGroup.Text className='doctor-search-prefix' id="inputGroup-sizing-default">
            Search Patient Name
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    );
  }
}
export default Search;
