import React from 'react';
import { Link } from 'react-router-dom';

const DropDownDark = (props) => {
    return (
        <>
            <div className="dropdown dropstart">
                <button className="btn btn-secondary dropdown-toggle purple-bk" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Pokeland<img className='ms-3' alt='alt' src='assets/img/flags/eng.webp'></img>
                </button>

                <ul className='dropdown-menu dropdown-menu-dark purple-bk'>
                    <li>
                        <Link to={'/'} className='dropdown-item d-flex justify-content-between px-2'>Pokeland
                            <img className='ms-3' alt='alt' src='assets/img/flags/eng.webp'></img>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='dropdown-item d-flex justify-content-between px-2'>Origem Poke
                            <img className='ms-3' alt='alt' src='assets/img/flags/pt.webp'></img>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='dropdown-item d-flex justify-content-between px-2'>Monstrui Origen
                            <img className='ms-3' alt='alt' src='assets/img/flags/es.webp'></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default DropDownDark;