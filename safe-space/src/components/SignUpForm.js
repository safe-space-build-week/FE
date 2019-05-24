import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Route, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSignUpWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 25px;
`;
const StyledSignUpHeader = styled.header`
  background-color: #28a745;
  font-family: "Pacifico", cursive;
`;

class SignUpForm extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .registerUser(this.state)
      .then(() => this.props.history.push("/"));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, username, password, phone } = this.state;
    return (
      <div>
        <StyledSignUpHeader>
          <h1>Safe Space</h1>
        </StyledSignUpHeader>
        <StyledSignUpWrapper>
          <Form onSubmit={this.handleSubmit} className="sign-up-form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input name="name" value={name} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input name="email" value={email} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Phone (ex. 15555555555)</Label>
              <Input
                name="phone"
                type="number"
                value={phone}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={this.handleChange}
                type="password"
                name="password"
              />
            </FormGroup>
            <Button color="success">
              {" "}
              {this.props.isRegistering ? (
                <Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="12"
                  width="26"
                />
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
        </StyledSignUpWrapper>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  name: PropTypes.isRequired,
  username: PropTypes.isRequired,
  email: PropTypes.isRequired,
  password: PropTypes.isRequired,
  phone: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).isRequired
};

const mapStateToProps = state => {
  return {
    name: state.name,
    username: state.username,
    email: state.email,
    password: state.password
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUpForm);
