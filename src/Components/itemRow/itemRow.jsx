import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import uuid from 'uuidv4';

const ItemRow = ({ id, modal, title, disabled, itemCategory, numberOfItems, itemType }) => {
    const { getItemList } = useContext(PokedexContext)
    const mainItems = []
    const optionalItems = []
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'

    for (var i = 1; i <= numberOfItems; i++)
        mainItems.push(`${itemCategory} ${i}`)

    for (var j = 1; j <= numberOfItems; j++)
        optionalItems.push(`${itemCategory} ${j}`)

    return (
        <>
            <div id={id} className="row d-flex justify-content-center builder-body rounded purple-bk-darker my-4 mx-2 pb-4">
                <div className="col-12 d-flex justify-content-center align-items-center text-center items-title">
                    <h2>{title}</h2>
                </div>

                {/* Abilities */}
                {itemType === 'ability' &&
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
                                {numberOfItems > 2
                                    ?
                                    <div className='d-none d-xl-flex justify-content-center options text-center'>
                                        <div className={`col-6 col-sm-${numberOfItems + 2} `}><b>Option 1</b></div>
                                        <div className={`col-6 col-sm-${numberOfItems + 2} `}><b>Option 2</b></div>
                                    </div>
                                    :
                                    <div className='d-flex justify-content-center options text-center'>
                                        <div className={`col-6 col-sm-${numberOfItems + 1} `}><b>Option 1</b></div>
                                        <div className={`col-6 col-sm-${numberOfItems + 1} `}><b>Option 2</b></div>
                                    </div>
                                }

                                <>
                                    {numberOfItems >= 3
                                        ?
                                        <div className={`col-12 col-xl-${numberOfItems} d-flex justify-content-center options text-center`}>
                                            {mainItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        <div className={`col-${numberOfItems} d-none d-xl-flex justify-content-center options text-center`}>
                                            {mainItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                        </div>
                                    }

                                    {numberOfItems === 4
                                        ? <div className='col-xl-2'></div>
                                        : <div className='col-xl-1'></div>
                                    }

                                    {numberOfItems >= 3
                                        ?
                                        <div className={`col-12 col-xl-${numberOfItems} d-flex justify-content-center options text-center`}>
                                            {mainItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        <div className={`col-${numberOfItems} d-none d-xl-flex justify-content-center options text-center`}>
                                            {optionalItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                        </div>
                                    }

                                    {numberOfItems <= 2 &&
                                        <div className={`col-12 col-xl-${numberOfItems} d-flex d-xl-none justify-content-center options text-center`}>
                                            {mainItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                            <div className='mx-1'></div>
                                            {optionalItems.map((desc, index) => (
                                                <div>
                                                    <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                        +
                                                    </button>
                                                    <p><small>{desc}</small></p>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </>
                            </>
                        }
                    </>
                }

                {/* Other Items */}
                {(itemType !== 'ability' && itemType !== 'hiddenSkill') &&
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
                                        <div className='d-flex justify-content-center flex-column'>
                                            <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                +
                                            </button>
                                            <p><small>{desc}</small></p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </>
                }

                {/* Other Items */}
                {itemType === 'hiddenSkill' &&
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
                                <div className={`d-flex justify-content-center options text-center flex-wrap`}>
                                    {mainItems.map((desc, index) => (
                                        <div className='d-flex justify-content-center flex-column'>
                                            <button onClick={() => getItemList(`ability_set_${index + 1}`)} key={uuid()} id={id} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                                +
                                            </button>
                                            <p><small>{desc}</small></p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </>
                }
            </div>
        </>
    );
}
export default ItemRow;