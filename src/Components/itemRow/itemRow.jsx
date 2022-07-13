import React, { useState } from 'react';
//import { PokedexContext } from '../../Data/Context/pokemonData';
import uuid from 'uuidv4';
import AddItemBtn from '../btn/addItemBtn';
import { Link } from 'react-router-dom';
import Textarea from '../forms/textarea';

const ItemRow = ({ children, id, modal, title, disabled, itemCategory, numberOfItems, itemType }) => {
    //const { getItemList } = useContext(PokedexContext)
    const mainItems = []
    const optionalItems = []
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'
    let btnIndex = 0
    const [note, showNote] = useState()

    for (var i = 1; i <= numberOfItems; i++)
        mainItems.push(`${itemCategory} ${i}`)

    for (var j = 1; j <= numberOfItems; j++)
        optionalItems.push(`${itemCategory} ${j}`)

    function addNote(note) {
        showNote(note)
    }

    function btnIndexer() {
        btnIndex++;
    }

    return (
        <>
            <div id={id} className="row d-flex justify-content-center builder-body rounded purple-bk-darker my-4 mx-2 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center text-center items-title position-relative">
                    <h2>{title}</h2>

                </div>

                {/* Abilities */}
                {itemType === 'ability' &&
                    <>
                        {disabled //Item disable
                            ?
                            <div className='col d-flex justify-content-center text-center options'>
                                <button className={btnStyle} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                                    +
                                </button>
                            </div>
                            :
                            <>
                                {numberOfItems <= 2 &&
                                    <div className='d-flex justify-content-center options'>
                                        <div className={`col-6 text-end mx-2`}><b>Option 1</b></div>
                                        <div className={`col-6 mx-2`}><b>Option 2</b></div>
                                    </div>
                                }

                                {numberOfItems >= 3 &&
                                    <div className='d-none d-xl-flex justify-content-center options text-center'>
                                        <div className={`col-6`}><b>Option 1</b></div>
                                        <div className={`col-6`}><b>Option 2</b></div>
                                    </div>
                                }

                                <>
                                    {numberOfItems >= 3 &&
                                        <>
                                            <div className={`row options text-center d-xl-none`}><b>Option 1</b></div>
                                            <div className={`col-12 col-xl-6 d-flex justify-content-center options text-center`}>
                                                {mainItems.map((desc, index) => (
                                                    <div key={uuid()}>
                                                        {btnIndexer()}
                                                        <div>
                                                            <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex} index={index + 1} modal={modal}></AddItemBtn>
                                                            <p><small>{desc}</small></p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={`row options text-center d-xl-none`}><b>Option 2</b></div>
                                            <div className={`col-12 col-xl-6 d-flex justify-content-center options text-center`}>
                                                {optionalItems.map((desc, index) => (
                                                    <div key={uuid()}>
                                                        {btnIndexer()}
                                                        <div>
                                                            <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex} index={index + 1} modal={modal}></AddItemBtn>
                                                            <p><small>{desc}</small></p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    }

                                    {/* {numberOfItems === 4
                                        ? <div className='col-xl-2'></div>
                                        : <div className='col-xl-1'></div>
                                    } */}

                                    {numberOfItems <= 2 &&
                                        <div className={`col-12 d-flex justify-content-center options text-center`}>
                                            {mainItems.map((desc, index) => (
                                                <div key={uuid()}>
                                                    {btnIndexer()}
                                                    <div>
                                                        <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex} index={index + 1} modal={modal}></AddItemBtn>
                                                        <p><small>{desc}</small></p>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className='mx-1'></div>
                                            {optionalItems.map((desc, index) => (
                                                <div key={uuid()}>
                                                    {btnIndexer()}
                                                    <div>
                                                        <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex} index={index + 1} modal={modal}></AddItemBtn>
                                                        <p><small>{desc}</small></p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </>
                            </>
                        }

                        {note === 'ability'
                            ?
                            <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                            :
                            <div className='text-end mx-3'>
                                <Link className='options' to="" onClick={() => addNote(itemType)}>Add Notes <i className="fa-solid fa-note-sticky"></i></Link>
                            </div>
                        }

                    </>
                }

                {/* Personality */}
                {(itemType === 'personality') &&
                    <>
                        {disabled //Item disable
                            ?
                            <div className='col d-flex justify-content-center text-center options'>
                                <button id={id} className={btnStyle} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                                    +
                                </button>
                            </div>
                            :
                            <>
                                <div className={`d-flex justify-content-center options text-center`}>
                                    {mainItems.map((desc, index) => (
                                        <div key={uuid()}>
                                            {btnIndexer()}
                                            <div className='d-flex justify-content-center flex-column'>
                                                <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex + numberOfItems + 4} index={index + 1} modal={modal}></AddItemBtn>
                                                <p><small>{desc}</small></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {note === 'personality'
                                    ?
                                    <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                                    :
                                    <div className='text-end mx-3'>
                                        <Link className='options' to="" onClick={() => addNote(itemType)}>Add Notes <i className="fa-solid fa-note-sticky"></i></Link>
                                    </div>
                                }
                            </>
                        }
                    </>
                }

                {/* Held Items */}
                {(itemType === 'heldItem') &&
                    <>
                        {disabled //Item disable
                            ?
                            <div className='col d-flex justify-content-center text-center options'>
                                <button id={id} className={btnStyle} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                                    +
                                </button>
                            </div>
                            :
                            <>
                                <div className={`d-flex justify-content-center options text-center`}>
                                    {mainItems.map((desc, index) => (
                                        <div key={uuid()}>
                                            {btnIndexer()}
                                            <div className='d-flex justify-content-center flex-column'>
                                                <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex + numberOfItems + 8} index={index + 1} modal={modal}></AddItemBtn>
                                                <p><small>{desc}</small></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {note === 'heldItem'
                                    ?
                                    <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                                    :
                                    <div className='text-end mx-3'>
                                        <Link className='options' to="" onClick={() => addNote(itemType)}>Add Notes <i className="fa-solid fa-note-sticky"></i></Link>
                                    </div>
                                }
                            </>
                        }
                    </>
                }

                {/* Gear */}
                {(itemType === 'gear') &&
                    <>
                        {disabled //Item disable
                            ?
                            <div className='col d-flex justify-content-center text-center options'>
                                <button id={id} className={btnStyle} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                                    +
                                </button>
                            </div>
                            :
                            <>
                                <div className={`d-flex justify-content-center options text-center`}>
                                    {mainItems.map((desc, index) => (
                                        <div key={uuid()}>
                                            {btnIndexer()}
                                            <div className='d-flex justify-content-center flex-column'>
                                                <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex + numberOfItems + 12} index={index + 1} modal={modal}></AddItemBtn>
                                                <p><small>{desc}</small></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {note === 'gear'
                                    ?
                                    <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                                    :
                                    <div className='text-end mx-3'>
                                        <Link className='options' to="" onClick={() => addNote(itemType)}>Add Notes <i className="fa-solid fa-note-sticky"></i></Link>
                                    </div>
                                }
                            </>
                        }
                    </>
                }

                {/* Hidden Skills */}
                {itemType === 'hiddenSkill' &&
                    <>
                        {disabled //Item disable
                            ?
                            <div className='col d-flex justify-content-center text-center options'>
                                <button className={btnStyle} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                                    +
                                </button>
                            </div>
                            :
                            <>
                                <div className={`d-flex justify-content-center options text-center flex-wrap hidden-skills-container px-0 px-sm-2`}>
                                    {mainItems.map((desc, index) => (
                                        <div key={uuid()}>
                                            {btnIndexer()}
                                            <div className='d-flex justify-content-center flex-column'>
                                                <AddItemBtn itemType={itemType} key={uuid()} btnIndex={btnIndex + numberOfItems + 8} index={index + 1} modal={modal}></AddItemBtn>
                                                <p><small>{desc}</small></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {note === 'hiddenSkill'
                                    ?
                                    <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                                    :
                                    <div className='text-end mx-3'>
                                        <Link className='options' to="" onClick={() => addNote(itemType)}>Add Notes <i className="fa-solid fa-note-sticky"></i></Link>
                                    </div>
                                }
                            </>
                        }
                    </>
                }

                {/* Save and Share */}
                {itemType === 'saveShare' &&
                    <>
                        {note === 'saveShare' &&
                            <Textarea placeholder="Type a Pokémon name" name="pokemon-name"> {title} notes</Textarea>
                        }
                        {children}
                    </>
                }
            </div>
        </>

    );
}
export default ItemRow;