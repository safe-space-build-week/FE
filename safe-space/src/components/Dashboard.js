import React from 'react';
import { Router, Link } from 'react-router-dom';
import LoginForm from "./components/Login";


class SafeSpace extends React.Component {
    render() {
        return (
            <div className="SafeSpace-Dashboard">
                <header>
                    <nav>
                        <Link to="/">Log Out</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default SafeSpace;

