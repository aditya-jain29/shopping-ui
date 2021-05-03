import React from "react";
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Product List</li>
                </Link>
                <Link style={navStyle} to="/kart">
                    <li>Kart</li>
                </Link>
                <Link style={navStyle} to="/order">
                    <li>Order</li>
                </Link>


            </ul>
        </nav>
    );
}

export default Nav;
