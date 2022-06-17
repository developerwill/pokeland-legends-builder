import React, { useState } from 'react';
import navbarLinks from '../../../Data/navbarLinks.js';
import { Link } from 'react-router-dom';

const NavbarLinks = (props) => {
    const [active, setActive] = useState(null);

    const links = navbarLinks.map((data, index) => {
        return (
            <li className="nav-item" key={index}>
                <Link className={`nav-link ${active === data.id && 'active'}`} to={data.href} onClick={() => setActive(data.id)}>
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