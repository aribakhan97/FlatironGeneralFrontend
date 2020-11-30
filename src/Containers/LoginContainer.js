import React from "react";
import {Form, Button} from 'react-bootstrap'
import logo from '../Assets/logo.png'

class LoginContainer extends React.Component {
  render() {
    return (
      <div className='login-container'>
        <img src = {logo}/> 
      <Form  onSubmit={(e) => this.props.handleLogin(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>
    );
  }
}
export default LoginContainer;
