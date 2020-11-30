import React from "react";
import "./App.css";
import DoctorContainer from "./Containers/DoctorContainer";
import PatientContainer from "./Containers/PatientContainer";
import history from "./Components/history";
import LoginContainer from "./Containers/LoginContainer";

import { Router, Redirect, Switch, Route } from "react-router-dom";

function getOffice() {
  return { id: 1 };
}

class App extends React.Component {
  state = {
    isLoggedIn: false,
    doctor: null,
  };
  logout = () => {
    this.setState({ isLoggedIn: false });
    history.push("/");
  };
  handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target[0].value;
    let password = e.target[1].value;
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };

    fetch("http://localhost:4000/login", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.isLoggedIn) {
          this.setState({ isLoggedIn: data.isLoggedIn, doctor: data.doctor });
        } else {
          this.setState({ isLoggedIn: data.isLoggedIn });
        }
      });
  };

  render() {
    return (
      <div className="App">
        <Router forceRefresh={true} history={history}>
          <Switch>
            <Route exact path="/">
              {this.state.isLoggedIn ? (
                <Redirect to="/home" />
              ) : (
                <LoginContainer
                  handleLogin={this.handleLogin}
                  loggedIn={this.loggedIn}
                />
              )}
            </Route>
            <Route
              path="/home"
              render={() => (
                <DoctorContainer
                  logout={this.logout}
                  office={getOffice()}
                  doctor={this.state.doctor}
                />
              )}
            />
            <Route
              path="/patients"
              render={() => <PatientContainer/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
