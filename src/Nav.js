// Nav.js
import React from "react";
import logo from './images/naviLogo.jpg';

class Nav extends React.Component {
    render(props) {
        return (
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        );
    }
}

// export Nav
export default Nav;