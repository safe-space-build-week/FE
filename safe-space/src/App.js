import React from "react";
import { Route, Link } from "react-router-dom";
import LoginForm from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/SignUpForm';


class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <Route path="/" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
       
      </div>
    );
  }
}



export default App;
