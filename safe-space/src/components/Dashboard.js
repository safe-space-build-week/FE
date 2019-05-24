import React from 'react';
import { Router, Link } from 'react-router-dom';
import NotesList from './NotesList';
import NotesForm from './NotesForm';



class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <header>
                    <nav>
                        <Link to="/" onClick={() => localStorage.clear()}>Log Out</Link>
                    </nav>
                </header>
                <NotesForm />
                <NotesList />
            </div>
        )
    }
}

export default Dashboard;

