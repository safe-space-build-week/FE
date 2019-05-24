import React from "react";
import { connect } from "react-redux";
import { getData, deleteNote, editNote } from "../actions/index";
import { Route, Link } from 'react-router-dom';


import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import EditNote from "./EditNote";

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
        console.log('editnote',note)
        this.props.editNote(note).then(() => {
            this.setState({ editingNoteId: null });
        });
        
    };

    setEdit = (e, noteid) => {
        e.preventDefault();
        this.setState({ editingNoteId: noteid });

    }
    
    render() {
        return (
            <div>
                {console.log('noteslistprops',this.props.notes)}
                {this.props.notes &&
                    
                this.props.notes.map(note => (
                    <div className="mapnotes">
                        {console.log(note)}
                       
                        <h2>{note.text}</h2>
                        <Button color="success"
                            onClick={(e) => this.setEdit(e, note.noteid)}>Edit</Button>
                        <Button color="success"
                            onClick={() => this.deleteNote(note.noteid)}
                        >Delete</Button>
                        {this.state.editingNoteId === note.noteid && <EditNote editNote={this.editNote} note={note}/>}
                    </div>
           
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
  console.log('noteslist',state);
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
