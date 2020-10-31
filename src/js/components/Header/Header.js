import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="header-nav-wrapper">
                <NavLink 
                    to="/" 
                    exact 
                    className="header-nav" 
                    activeClassName="header-nav-active" >Home</NavLink>
                <NavLink 
                    to="/login" 
                    className="header-nav" 
                    activeClassName="header-nav-active" >Login</NavLink>
                <NavLink 
                    to="/locales" 
                    className="header-nav" 
                    activeClassName="header-nav-active" >Locales</NavLink>
                <NavLink 
                    to="/locale" 
                    className="header-nav" 
                    activeClassName="header-nav-active" >Locale</NavLink>
            </nav>
        </header>
    );
}

export default Header;