import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const StyledLogin = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
`;

export default class loginForm extends React.Component {
  render() {
    return (
      <StyledLogin>
        <FormGroup>
          <Label for="User">Username:</Label>
          <Input type="user" name="user" id="login-user" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password:</Label>
          <Input type="password" name="password" id="Password" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </StyledLogin>
    );
  }
}
