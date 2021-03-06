import React, { useContext, useState, useEffect } from 'react';
import ItemRow from './itemRow/itemRow';
import HeaderType from './headerType/headerType';
import InputText from './forms/inputText';
import { PokedexContext } from '../Data/Context/pokemonData';
import { BuildContext } from '../Data/Context/buildData';

const BuilderContent = (props) => {
    const { pokemonData } = useContext(PokedexContext);
    const { updateBuildTitle } = useContext(BuildContext);
    const [buildTitle, setBuildTitle] = useState();
    const numberOfAbilities = pokemonData.numberOf.abilities;

    useEffect(() => {
        updateBuildTitle(buildTitle)
        // eslint-disable-next-line
    }, [buildTitle])

    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9 custom-border rounded-3">
            <HeaderType />
            <form className='form-builder'>
                <InputText setBuildTitle={setBuildTitle} placeholder="Type a Pokémon name" name="pokemon-name">Build Title</InputText>

                <ItemRow id="builder-abilities" title="Abilities" itemCategory={'Ability'} numberOfItems={numberOfAbilities} itemType={'ability'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-personality" title="Personality" itemCategory={'Nature'} numberOfItems={4} itemType={'personality'} disabled={false} modal="#personalities-modal" />
                <ItemRow id="builder-held-items" title="Held Items" itemCategory={'Item'} numberOfItems={4} itemType={'heldItem'} disabled={false} modal="#heldItems-modal" />
                {/* <ItemRow id="builder-gear" title="Gear" itemCategory={'Gear'} numberOfItems={4} itemType={'gear'} disabled={false} modal="#gears-modal" />
                <ItemRow id="builder-hidden-skills" title="Hidden Skills" itemCategory={'Skill'} numberOfItems={12} itemType={'hiddenSkill'} disabled={false} modal="#hiddenSkills-modal" /> */}

                <div className='d-flex justify-content-end'>
                    <button className='btn btn-info' type="button" data-bs-toggle="modal" data-bs-target="#saveshare-modal">Continue <i className="fa-solid fa-circle-chevron-right"></i></button>
                </div>
            </form>
        </div>
    );
}
export default BuilderContent;