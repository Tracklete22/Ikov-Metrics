import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <ul className="nav-wrapper">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li className="nav-logo">Created by Hailey</li>
        </ul>
    )
}

export default Navbar