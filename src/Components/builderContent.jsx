import React, { useContext } from 'react';

import ItemRow from './itemRow/itemRow';
import HeaderType from './headerType/headerType';
//import BuildStatus from './btn/buildStatus';
import InputText from './forms/inputText';
import BtnModal from './btn/btnModal';
import { PokedexContext } from '../Data/Context/pokemonData';

const BuilderContent = (props) => {
    const { pokemonData } = useContext(PokedexContext);
    const numberOfAbilities = pokemonData.numberOf.abilities;
    let gearButtons = [];
    let heldItemsButtons = [];
    let personalityButtons = [];
    let hiddenSkillsButtons = [];

    for (let i = 1; i <= pokemonData.numberOf.personalities; i++)
        personalityButtons.push(<BtnModal key={i} id={`personality-${i}`} disabled={true} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary" animated={true} modal="#modal-1">+</BtnModal>);

    for (let i = 1; i <= pokemonData.numberOf.heldItems; i++)
        heldItemsButtons.push(<BtnModal key={i} id={`held-item-${i}`} disabled={true} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary" animated={true} modal="#modal-1">+</BtnModal>);


    for (let i = 1; i <= pokemonData.numberOf.gear; i++)
        gearButtons.push(<BtnModal key={i} id={`gear-${i}`} disabled={true} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary" animated={true} modal="#modal-1">+</BtnModal>);

    for (let i = 1; i <= pokemonData.numberOf.hiddenSkills; i++) {
        if (i === 5 || i === 9)

            hiddenSkillsButtons.push(<div key={i * 7} className='row'></div>)
        if (i <= 3)
            hiddenSkillsButtons.push(<BtnModal key={i} id={`hidden-skill-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary" animated={true} modal="#modal-1">+</BtnModal>);
        else
            hiddenSkillsButtons.push(<BtnModal key={i} id={`hidden-skill-${i}`} disabled={true} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary" animated={true} modal="#modal-1">+</BtnModal>);
    }

    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9 custom-border rounded-3">
            <HeaderType pokemonID={137} />
            <form className='form-builder'>
                <InputText placeholder="Type a Pokémon name" name="pokemon-name">Build Title</InputText>

                <ItemRow id="builder-abilities" title="Abilities" itemCategory={'Ability'} numberOfItems={numberOfAbilities} itemType={'ability'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-personality" title="Personality" itemCategory={'Nature'} numberOfItems={4} itemType={'personality'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-held-items" title="Held Items" itemCategory={'Item'} numberOfItems={4} itemType={'heldItem'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-gear" title="Gear" itemCategory={'Gear'} numberOfItems={4} itemType={'gear'} disabled={false} modal="#abilities-modal" />
                <ItemRow id="builder-hidden-skills" title="Hidden Skills" itemCategory={'Skill'} numberOfItems={12} itemType={'hiddenSkill'} disabled={false} modal="#abilities-modal" />
            </form>

            {/*  <ItemRow id="builder-personality" title="Personality"> {personalityButtons} </ItemRow>
            <ItemRow id="builder-held-items" title="Held Item"> {heldItemsButtons} </ItemRow>
            <ItemRow id="builder-gear" title="Gear"> {gearButtons} </ItemRow> */}

            {/* <ItemRow id="builder-hidden-skills" title="Hidden Skills">
                {hiddenSkillsButtons}
                <div className='row my-1'>
                    <div className='d-flex justify-content-end flex-column flex-sm-row'>
                        <BuildStatus isPublic={true} />
                        <button className='btn btn-success m-2' type="button"><i className="fa-solid fa-floppy-disk"></i> Save Build</button>
                    </div>
                </div>
            </ItemRow> */}
        </div>
    );
}
export default BuilderContent;