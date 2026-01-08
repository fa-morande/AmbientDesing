import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
    <Link className="nav-link" to={to}>
        {children}
    </Link>
);

export default NavLink;