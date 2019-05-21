import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledLogin = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
  background-color: grey;
`;

export default class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    };
    
    login = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push('/protected'));
      };

  render() {
    return (
      <StyledLogin>
        <FormGroup>
          <Label for="User">Username:</Label>
                <Input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
                <Input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </FormGroup>
            {this.props.error && <p className="error">{this.props.error}</p>}

        <Button color="primary">Submit</Button>
      </StyledLogin>
    );
  }
}
