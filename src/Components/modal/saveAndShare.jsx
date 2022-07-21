import React, { /* useState, useEffect, useRef, */ useContext } from 'react';
//import { Overlay } from 'react-bootstrap';
//import Tooltip from 'react-bootstrap/esm/Tooltip';
import { BuildContext } from '../../Data/Context/buildData';
import { DatabaseContext } from '../../Controllers/Database';
import { useNavigate } from "react-router-dom";

const SaveAndShare = () => {
    /* const [show, setShow] = useState(false)
    const target = useRef(null)
    const [share, setShare] = useState(false) */
    const navigate = useNavigate();
    const logged = true

    const { buildData } = useContext(BuildContext)
    const { saveBuild/*,  buildUrl */ } = useContext(DatabaseContext)

    /* function copyLink() {
        navigator.clipboard.writeText(buildUrl)
        setShow(!show)
    } */

    function onSaveBuild() {
        saveBuild(buildData)
        navigate('/')
        //setShare(true)
    }

    /* useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 1500)
    }, [show]) */

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="saveshare-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker text-center">
                        <h4>It seems you're all set!</h4>
                        {logged
                            ?
                            <>
                                <p>After saving this build will became public.</p>
                                <button onClick={() => onSaveBuild()} className='btn btn-success m-2' type="button" data-bs-dismiss="modal"><i className="fa-solid fa-floppy-disk"></i> Save Build</button>
                            </>
                            :
                            <>
                                <p>Oh no... you need to be logged in order to save builds.</p>
                                <button className='btn btn-primary m-2' type="button" data-bs-dismiss="modal">Login <i className="fa-solid fa-right-to-bracket"></i></button>
                            </>
                        }

                        <button className='btn btn-danger m-2' type="button" data-bs-dismiss="modal">Close <i className="fa-regular fa-circle-xmark"></i></button>
                        {/* {!share ?
                            <button className='btn btn-primary m-2' disabled type="button"><i className="fa-solid fa-share-nodes"></i> Copy and Share!</button>
                            :
                            <button onClick={() => copyLink()} className='btn btn-primary m-2' type="button"><i className="fa-solid fa-share-nodes"></i> Copy and Share!</button>
                        } 
                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Copied!
                                </Tooltip>
                            )}
                        </Overlay>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SaveAndShare;