import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 10px;
`;

class EditNote extends React.Component {
  state = {
    note: this.props.note
  };

  handleChange = e => {
    let target = e.target;
    this.setState(prevState => ({
      note: {
        ...prevState.note,
        text: target.value
      }
    }));
  };

  changeNote = e => {
    e.preventDefault();
    this.props.editNote(e, this.state.note);
  };

  render() {
    return (
      <div className="edit-form">
        <Form className="edit-form" onSubmit={this.changeNote}>
          <Label for="text" />
          <Input
            name="text"
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <StyledButton color="success">Update</StyledButton>
        </Form>
      </div>
    );
  }
}

export default EditNote;
