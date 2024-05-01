// Main.js
import React from 'react';
import Highlight from './highlight.js';
import Testimonial from './Testimonial.js';
import './main.css';
import heroImage from '../images/restauranfood.jpg';
import { Routes, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Menu from './menu.js';
import Reservations from './reservations.js';
import Order from './order.js';
import Login from './login.js';

class Main extends React.Component {
    render(props) {
        return (
            <main>
                <Routes>
                    <Route path="/index" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        );
    }
}

// export main
export default Main;