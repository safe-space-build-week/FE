import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { handleAddNote } from "../actions";
import { connect } from "react-redux";

class NotesForm extends React.Component {
    state = {
        
        text: ''
    };

    noteSubmit = e => {
        console.log('notes', this.props)
        e.preventDefault();
        this.props
          .handleAddNote(this.state)
          .then(() => this.props.history.push("/dashboard"));
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
                        <Label for="myNotesText">What are you proud of today?</Label>
                        <Input name="text" value={text} onChange={this.handleChange} />
                        <Button color="success">Update</Button>
                        
                </FormGroup>

                </Form>


            </div>
        )
            
        
    }
}

const mapStateToProps = state => {
    return { myNotes: state.myNotes }
};

export default connect(mapStateToProps, { handleAddNote })(NotesForm);

