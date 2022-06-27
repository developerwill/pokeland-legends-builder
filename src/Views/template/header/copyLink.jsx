import React, { useContext, useState, useRef, useEffect } from 'react';
import HeaderBase from './headerBase';
import { PokedexContext } from '../../../Data/Context/pokemonData';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const CopyLinkHeader = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const { pokemonData } = useContext(PokedexContext)

    function copyLink(link) {
        navigator.clipboard.writeText(link)
        setShow(!show)
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 1500);
    }, [show]);

    return (
        <HeaderBase>
            <div className="col-12 col-lg-5 col-xl-4 col-xxl-3 mb-4 mb-lg-0 text-center">
                <h1 className="mb-0 site-title box">Pokémon Legends Builder</h1>
            </div>
            <div className="col-12 col-lg-6 ms-md-auto">
                <div className="input-group tooltipme" data-bs-toggle="tooltip" data-bs-placement="left" title="Copy &amp; Share!">
                    <input className="form-control custom-border purple-bk" type="text" value={pokemonData.build_url} readOnly="Test"></input>

                    <button onClick={() => copyLink(pokemonData.build_url)} ref={target} className="btn btn-primary" type="button">Copy &amp; Share!</button>
                    <Overlay target={target.current} show={show} placement="right">
                        {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                Copied!
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
            </div>
        </HeaderBase>
    );
}
export default CopyLinkHeader;