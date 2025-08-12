import React from "react";
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = (()=>{
    return (
        <div className="container">
            <div className="logo">
                <img className="logo-image" src={logo} alt="logo" />
            </div>

            <div className="nav-bar">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Register</a>
            </div>
        </div>
    )
})

export default Header;