import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li><NavLink exact to="/" className="hover:underline" activeClassName="underline">Home</NavLink></li>
          <li><NavLink to="/new-releases" className="hover:underline" activeClassName="underline">New Releases</NavLink></li>
          <li><NavLink to="/beat-store" className="hover:underline" activeClassName="underline">Beat Store</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline" activeClassName="underline">Contact Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
