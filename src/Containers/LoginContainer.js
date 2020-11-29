import React from "react";
import {Form, Button} from 'react-bootstrap'

class LoginContainer extends React.Component {
  render() {
    return (
      <Form className='login-container' onSubmit={(e) => this.props.handleLogin(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default LoginContainer;
