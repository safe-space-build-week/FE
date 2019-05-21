import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Route, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import {registerUser} from '../actions'

class SignUpForm extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    isRegistering: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .registerUser(this.state)
      .then(() => this.props.history.push("/"));
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  validateForm = () => {
    const { password, email } = this.state;
    return password.length > 0 && email.length > 0;
  };

  render() {
    const { name, email, username, password } = this.state;
    return (
      <div className="sign-up">
        <Form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="name" value={name} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              value={username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              value={password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button color="primary">
            {" "}
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
        <div className="go-to-login">
          <p>
            Already Have An Account?{" "}
            <Route render={() => <Link to="/">Log In</Link>} />
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistering: state.rootReducer.isRegistering
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUpForm);
