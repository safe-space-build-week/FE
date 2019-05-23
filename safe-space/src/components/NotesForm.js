import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { handleAddNote } from "../actions";
import { connect } from "react-redux";
import { history } from "../helpers/history"


class NotesForm extends React.Component {
    state = {
        
        text: ''
    };

    noteSubmit = e => {
        console.log('notes', this.props)
        e.preventDefault();
        this.props
            .handleAddNote(this.state)
            .then(() => window.location.reload())
            .catch(err => console.log(err))
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
                        <Button color="success">Send</Button>
                        
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

