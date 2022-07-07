import React, { useContext, useState, useRef, useEffect } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { PokedexContext } from '../../Data/Context/pokemonData';

const SaveShare = (props) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [saveBuild, setSaveBuild] = useState(false)

    const { pokemonData } = useContext(PokedexContext)

    function copyLink(link) {
        navigator.clipboard.writeText(link)
        setShow(!show)
    }

    function onSaveBuild() {
        setSaveBuild(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 1500);
    }, [show]);

    if (!saveBuild)
        return (
            <>
                <button onClick={() => onSaveBuild()} className='btn btn-success m-2' type="button"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                <button className='btn btn-primary m-2' type="button" disabled><i class="fa-solid fa-share-nodes"></i> Copy Link</button>
            </>
        )
    else
        return (
            <>
                <button className='btn btn-success m-2' type="button"><i class="fa-solid fa-floppy-disk"></i> Saved</button>
                <button onClick={() => copyLink(pokemonData.build_url)} ref={target} className='btn btn-primary m-2' type="button"><i class="fa-solid fa-share-nodes"></i> Copy Link</button>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            Copied!
                        </Tooltip>
                    )}
                </Overlay>
            </>
        )
}
export default SaveShare;