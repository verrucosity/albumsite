import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink> </li>
          <li><NavLink to="/new-releases" activeClassName="active">New Releases</NavLink></li>
          <li><NavLink to="/beat-store" activeClassName="active">Beat Store</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;