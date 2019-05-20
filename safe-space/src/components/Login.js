import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class loginForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="User">User Name</Label>
                    <Input type="user" name="user" id="login-user" placeholder="Username" />
                </FormGroup>
                <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="password" />
        </FormGroup>


            </Form>
        )
    }
}