import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from '../actions';
import { Route, Link } from 'react-router-dom';
import SignUpForm from './SignUpForm'


const StyledLogin = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
  
`;

class LoginForm extends React.Component {
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
          .then(() => this.props.history.push('/dashboard'));
      };

  render() {
    return (
      <StyledLogin onSubmit={this.login}>
        <FormGroup>
          <Label for="user">Username:</Label>
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
           

        <Button color="primary"> {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Login'
                )}</Button>
            <p>Don't have an account? </p> <Link to="/signup" >Sign up!</Link>
            

            
            
      </StyledLogin>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(LoginForm);
