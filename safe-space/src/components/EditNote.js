import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


class EditNote extends React.Component {
    state = {
        note: this.props.note
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    changeNote = e => {
        this.props.editNote(e, this.state.note);
    }
    
    render() {
        return (
            <div className="edit-form">
                <Form className="edit-form" onSubmit={this.changeNote}>
                    <Label for="text"></Label>
                    <Input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <Button color="success">Update</Button>
                </Form>


            </div>
        )
    };
};

export default EditNote;