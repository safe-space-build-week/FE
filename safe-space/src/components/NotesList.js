import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import Note from '../components/Note';

class NotesList extends React.Component {
    
    componentDidMount = () => {
        this.props.getData(this.props.token);
    };

    render() {
        return (
            <div>
                {this.props.notes.length > 0 ? this.props.notes.map(note => <Note key={note.id} data={note} />) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        notes: state.notes,
        token: state.token
    }
}

export default connect(mapStateToProps, { getData })(NotesList);