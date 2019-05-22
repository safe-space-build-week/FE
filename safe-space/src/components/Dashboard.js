import React from 'react';
import { Router, Link } from 'react-router-dom';
import NotesList from './NotesList';



class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <header>
                    <nav>
                        <Link to="/" onClick={localStorage.clear()}>Log Out</Link>
                    </nav>
                </header>
                <NotesList />
            </div>
        )
    }
}

export default Dashboard;

