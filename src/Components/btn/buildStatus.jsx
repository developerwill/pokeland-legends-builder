import React, { useContext, useState, useRef, useEffect } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
//import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';
//import { saveBuild } from '../../Controllers/Database'
import { DatabaseContext } from '../../Controllers/Database';

const SaveShare = (props) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [share, setShare] = useState(false)

    //const { pokemonData } = useContext(PokedexContext)
    const { buildData } = useContext(BuildContext)
    const { saveBuild, buildUrl } = useContext(DatabaseContext)

    function copyLink() {
        navigator.clipboard.writeText(buildUrl)
        setShow(!show)
    }

    function onSaveBuild() {
        //console.log(buildData);
        saveBuild(buildData)
        //saveBuild()
        setShare(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 1500);
    }, [show]);

    if (!share)
        return (
            <>
                <button className='btn btn-info' type="button" data-bs-toggle="modal" data-bs-target="#saveshare-modal">Continue <i className="fa-solid fa-circle-chevron-right"></i></button>

                {/* <button onClick={() => onSaveBuild()} className='btn btn-success m-2' type="button"><i className="fa-solid fa-floppy-disk"></i> Save Build</button> */}
            </>
        )
    else
        return (
            <>
                <button onClick={() => copyLink()} ref={target} className='btn btn-primary m-2' type="button"><i className="fa-solid fa-share-nodes"></i> Copy and Share!</button>
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