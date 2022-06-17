import React from 'react';
import BtnOffcanvas from '../../../Components/btn/btnOffcanvas';
import OffcanvasBase from '../../../Components/offcanvas/offcanvasBase';
import NavbarLinks from './navbarLinks';

const Navbar = (props) => {
    return (
        <header>
            <nav class="navbar navbar-dark navbar-expand-sm py-3 purple-navbar">
                <div class="container p-sm-0">

                    <div className='col d-flex justify-content-end'>
                        <BtnOffcanvas classes="navbar-toggler" disabled={false} offcanvas="navbar-mobile">
                            <span className="navbar-toggler-icon"></span>
                        </BtnOffcanvas>
                    </div>

                    <div className="col-12 d-none d-sm-flex justify-content-between">
                        <a class="navbar-brand" href=" ">Navbar</a>
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