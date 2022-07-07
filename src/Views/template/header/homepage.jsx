import React from 'react';
import { Link } from 'react-router-dom';
import BtnOffcanvas from '../../../Components/btn/btnOffcanvas';
import HeaderBase from './headerBase';
import DropDownDark from '../../../Components/dropdown/dropdownDark';

const HomepageHeader = (props) => {
    return (
        <>
            <div className='d-flex justify-content-end d-md-none'>
                <DropDownDark />
            </div>
            <HeaderBase>
                <div className="col-12 col-sm-7 col-md-5 col-xl-4 col-xxl-3 mb-4 mb-sm-0 text-center">
                    <h1 className="mb-0 site-title box">Pokémon Legends Top Builds</h1>
                </div>
                <div className="col p-0 d-flex justify-content-center justify-content-sm-end">
                    <BtnOffcanvas classes="btn-primary me-2 d-sm-none" offcanvas="offcanvas-search-1" text="Search Builds" icon="fa-solid fa-magnifying-glass"></BtnOffcanvas>

                    <div className='d-none d-md-block me-3'>
                        <DropDownDark />
                    </div>

                    <Link className='btn btn-success' to={'new-build'}>
                        Create Build <i className='fa-solid fa-plus'></i>
                    </Link>
                </div>
            </HeaderBase>
        </>
    );
}
export default HomepageHeader;