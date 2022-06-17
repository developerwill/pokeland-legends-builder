import React from 'react';
import navbarLinks from '../../../Data/navbarLinks.js';
import { Link } from 'react-router-dom';

const NavbarLinks = (props) => {

    const links = navbarLinks.map((data, index) => {
        return (
            <li className="nav-item" key={index}>
                <Link className='nav-link' to={data.href}>
                    {data.text}
                </Link>
            </li>
        );
    });

    return (
        <ul class="navbar-nav">
            {links}
        </ul>
    );
}
export default NavbarLinks;