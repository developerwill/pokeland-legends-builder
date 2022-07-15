import React, { useContext } from 'react';
import ItemRow from './itemRow/itemRow';
import HeaderType from './headerType/headerType';
import InputText from './forms/inputText';
import { PokedexContext } from '../Data/Context/pokemonData';
import SaveShare from './btn/buildStatus';

const BuilderContent = (props) => {
    const { pokemonData } = useContext(PokedexContext);
    const numberOfAbilities = pokemonData.numberOf.abilities;

    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9 custom-border rounded-3">
            <HeaderType />
            <form className='form-builder'>
                <InputText placeholder="Type a Pokémon name" name="pokemon-name">Build Title</InputText>

                <ItemRow id="builder-abilities" title="Abilities" itemCategory={'Ability'} numberOfItems={numberOfAbilities} itemType={'ability'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-personality" title="Personality" itemCategory={'Nature'} numberOfItems={4} itemType={'personality'} disabled={false} modal="#personalities-modal" />
                <ItemRow id="builder-held-items" title="Held Items" itemCategory={'Item'} numberOfItems={4} itemType={'heldItem'} disabled={false} modal="#heldItems-modal" />
                {/* <ItemRow id="builder-gear" title="Gear" itemCategory={'Gear'} numberOfItems={4} itemType={'gear'} disabled={false} modal="#gears-modal" />
                <ItemRow id="builder-hidden-skills" title="Hidden Skills" itemCategory={'Skill'} numberOfItems={12} itemType={'hiddenSkill'} disabled={false} modal="#hiddenSkills-modal" /> */}

                <ItemRow id="options" title="Save and Share" itemType={'saveShare'} >
                    <div className='d-flex justify-content-center'>
                        <SaveShare></SaveShare>
                    </div>
                </ItemRow>
            </form>
        </div>
    );
}
export default BuilderContent;