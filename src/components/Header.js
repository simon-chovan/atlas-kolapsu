import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="main-header">
        <NavLink to="/atlas">atlas</NavLink>
        <NavLink to="/info">info</NavLink>
    </nav>
  );
}

export default Header;