import React from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import LoginForm from "./components/Login";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <LoginForm />
       
      </div>
    );
  }
}



export default App;
