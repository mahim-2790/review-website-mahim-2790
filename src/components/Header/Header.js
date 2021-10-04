import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between bg-gray-600 p-4 text-white">
                <div>
                    <NavLink className="m-6 font-mono font-bold" to="/home">Musicians Hub</NavLink>
                </div>
                <div>
                    <NavLink className="m-6" to="/home">Home</NavLink>
                    <NavLink className="m-6" to="/services">Services</NavLink>
                    <NavLink className="m-6" to="/about">About</NavLink>
                    <NavLink className="m-6" to="/order-history">Order History</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;