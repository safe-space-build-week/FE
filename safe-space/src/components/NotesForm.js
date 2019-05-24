import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { handleAddNote } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledFormLabel = styled(Label)`
  font-size: 1.5rem;
`;
const StyledButton = styled(Button)`
  margin: 10px;
`;

class NotesForm extends React.Component {
  state = {
    text: ""
  };

  noteSubmit = e => {
    e.preventDefault();
    this.props
      .handleAddNote(this.state)
      .then(() => window.location.reload())
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="notes-form">
        <Form onSubmit={this.noteSubmit}>
          <FormGroup>
            <StyledFormLabel for="myNotesText">
              What should SafeSpace remember for you today?
            </StyledFormLabel>
            <Input name="text" value={text} onChange={this.handleChange} />
            <StyledButton color="success">Send</StyledButton>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { myNotes: state.myNotes };
};

export default connect(
  mapStateToProps,
  { handleAddNote }
)(NotesForm);
