import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    const {name, setName} = props;
    const logout = async () => {
        await fetch(`https://localhost:44352/api/auth/logout`, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                credentials: 'include'
            });

            setName('');
    }

    let menu;

    if (!name){
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                    </li>
                </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>
            <div>
                {menu}
            </div>
            </div>
        </nav>
    );
};

export default Nav;