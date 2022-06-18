import React from 'react';

import ItemRow from './itemRow/itemRow';
import AddButton from './btn/addButton';
import HeaderType from './headerType/headerType';
import BuildStatus from './btn/buildStatus';
import InputText from './forms/inputText';

const BuilderContent = (props) => {
    let abilitiesButtons = [];
    let personalityButtons = [];
    let heldItemsButtons = [];
    let gearButtons = [];
    let hiddenSkillsButtons = [];

    for (let i = 1; i <= 4; i++)
        abilitiesButtons.push(<AddButton key={i} id={`ability-${i}`} disabled={false}></AddButton>);
    for (let i = 1; i <= 4; i++)
        heldItemsButtons.push(<AddButton key={i} id={`held-item-${i}`} disabled={true}></AddButton>);
    for (let i = 1; i <= 4; i++)
        personalityButtons.push(<AddButton key={i} id={`personality-${i}`} disabled={true}></AddButton>);
    for (let i = 1; i <= 4; i++)
        gearButtons.push(<AddButton key={i} id={`gear-${i}`} disabled={true}></AddButton>);
    for (let i = 1; i <= 12; i++)
        hiddenSkillsButtons.push(<AddButton key={i} id={`hidden-skill-${i}`} disabled={true}></AddButton>);

    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9 custom-border rounded-3">
            <HeaderType pokemonID={137} />
            <form className='form-builder'>
                <InputText placeholder="Type a Pokémon name" name="pokemon-name">Build Title</InputText>
            </form>

            <ItemRow id="builder-abilities" title="Abilities"> {abilitiesButtons} </ItemRow>
            <ItemRow id="builder-personality" title="Personality"> {personalityButtons} </ItemRow>
            <ItemRow id="builder-held-items" title="Held Item"> {heldItemsButtons} </ItemRow>
            <ItemRow id="builder-gear" title="Gear"> {gearButtons} </ItemRow>

            <ItemRow id="builder-hidden-skills" title="Hidden Skills">
                {hiddenSkillsButtons}
                <div className='row my-1'>
                    <div className='d-flex justify-content-end flex-column flex-sm-row'>
                        <BuildStatus public={true} />
                        <button className='btn btn-success m-2' type="button"><i className="fa-solid fa-floppy-disk"></i> Save Build</button>
                    </div>
                </div>
            </ItemRow>
        </div>
    );
}
export default BuilderContent;