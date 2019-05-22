import React from 'react';
import { Router, Link } from 'react-router-dom';



class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <header>
                    <nav>
                        <Link to="/" onClick={localStorage.clear()}>Log Out</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Dashboard;

