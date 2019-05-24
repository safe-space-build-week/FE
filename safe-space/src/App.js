import React from "react";
import { Route, Link } from "react-router-dom";
import LoginForm from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SignUpForm from "./components/SignUpForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route exact path="/" component={LoginForm} />
        </div>
        <div />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpForm} />
      </div>
    );
  }
}

export default App;
