import React from "react";
import { connect } from "react-redux";
import { getData, deleteNote } from "../actions/index";

import Note from "../components/Note";
import EditNote from './EditNote'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NotesList extends React.Component {
    state = {
        editingNoteId: null
    };

    componentDidMount = () => {
        this.props.getData(this.props.token);
    };
    
    deleteNote = id => {
        console.log('puppy', id)
        this.setState({ deletingNoteId: id });
        this.props.deleteNote(id);
    };

    editNote = (e, note) => {
        e.preventDefault();
        this.props.editNote(note).then(() => {
            this.setState({ editingNoteId: null });
        });
    };
    
    render() {
        return (
            <div>
               {this.props.notes &&
                
                this.props.notes.map(note => (
                    <div className="mapnotes">
                        {console.log(note)}
                       
                        <h2>{note.text}</h2>
                         <Button color="success"
                            onClick={() => this.setState({ editingNoteId: note.noteid })}>Edit</Button>
                        <Button color="success"
                            onClick={() => this.deleteNote(note.noteid)}
                        >Delete</Button>
                       
                    </div>
           
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    notes: state.notes,
      token: state.token,
      deletingNote: state.deletingNote
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteNote }
)(NotesList);
