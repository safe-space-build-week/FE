import React from "react";
import { connect } from "react-redux";
import { getData, deleteNote, editNote } from "../actions/index";
import { Button } from "reactstrap";
import EditNote from "./EditNote";
import styled from "styled-components";

const StyledNotes = styled.div`
  border: 2px solid #28a745;
  border-radius: 10px;
`;

const StyledNotesH2 = styled.h2`
  font-family: "Pacifico", cursive;
`;
const StyledButton = styled(Button)`
  margin: 10px;
`;

class NotesList extends React.Component {
  state = {
    editingNoteId: null
  };

  componentDidMount = () => {
    this.props.getData(this.props.token);
  };

  deleteNote = id => {
    this.setState({ deletingNoteId: id });
    this.props.deleteNote(id);
  };

  editNote = (e, note) => {
    e.preventDefault();
    this.props.editNote(note).then(() => {
      this.setState({ editingNoteId: null });
    });
  };

  setEdit = (e, noteid) => {
    e.preventDefault();
    this.setState({ editingNoteId: noteid });
  };

  render() {
    return (
      <div>
        {this.props.notes &&
          this.props.notes.map(note => (
            <StyledNotes>
              <StyledNotesH2>{note.text}</StyledNotesH2>
              <StyledButton
                color="success"
                onClick={e => this.setEdit(e, note.noteid)}
              >
                Edit
              </StyledButton>
              <StyledButton
                color="success"
                onClick={() => this.deleteNote(note.noteid)}
              >
                Delete
              </StyledButton>
              {this.state.editingNoteId === note.noteid && (
                <EditNote editNote={this.editNote} note={note} />
              )}
            </StyledNotes>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    token: state.token,
    deletingNote: state.deletingNote,
    editingNote: state.editingNote
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteNote, editNote }
)(NotesList);
