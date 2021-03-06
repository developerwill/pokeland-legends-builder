import React from 'react';
import BtnOffcanvas from '../../../Components/btn/btnOffcanvas';
import OffcanvasBase from '../../../Components/offcanvas/offcanvasBase';
import NavbarLinks from './navbarLinks';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-sm py-3 purple-navbar">
                <div className="container p-sm-0">

                    <div className='col d-flex justify-content-between'>
                        <img alt="alt" className='d-sm-none' src='assets/img/pokeland_legends_club_logo.webp'></img>
                        <BtnOffcanvas classes="navbar-toggler" disabled={false} offcanvas="navbar-mobile">
                            <span className="navbar-toggler-icon"></span>
                        </BtnOffcanvas>
                    </div>

                    <div className="col-12 d-none d-sm-flex justify-content-between align-items-center">
                        <Link className="navbar-brand" to="/">
                            <img alt="alt" src='assets/img/pokeland_legends_club_logo.webp'></img>
                        </Link>
                        <NavbarLinks />
                    </div>

                    <div className='col-12 d-block d-sm-none'>
                        <OffcanvasBase id="navbar-mobile">
                            <NavbarLinks />
                        </OffcanvasBase>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;