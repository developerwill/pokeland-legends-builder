import React from 'react';

import ItemRow from './itemRow/itemRow';
import HeaderType from './headerType/headerType';
import BuildStatus from './btn/buildStatus';
import InputText from './forms/inputText';
import BtnModal from './btn/btnModal';

const BuilderContent = (props) => {
    let abilitiesButtons = [];
    let personalityButtons = [];
    let heldItemsButtons = [];
    let gearButtons = [];
    let hiddenSkillsButtons = [];

    for (let i = 1; i <= 4; i++)
        abilitiesButtons.push(<BtnModal key={i} id={`ability-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " animated={true} modal="#modal-1">+</BtnModal>);

    for (let i = 1; i <= 4; i++)
        heldItemsButtons.push(<BtnModal key={i} id={`held-item-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " animated={true} modal="#modal-1">+</BtnModal>);
    for (let i = 1; i <= 4; i++)
        personalityButtons.push(<BtnModal key={i} id={`personality-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " animated={true} modal="#modal-1">+</BtnModal>);
    for (let i = 1; i <= 4; i++)
        gearButtons.push(<BtnModal key={i} id={`gear-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " animated={true} modal="#modal-1">+</BtnModal>);
    for (let i = 1; i <= 12; i++) {
        if (i === 5 || i === 9)
            hiddenSkillsButtons.push(<div key={i * 7} className='row'></div>)

        hiddenSkillsButtons.push(<BtnModal key={i} id={`hidden-skill-${i}`} disabled={false} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " animated={true} modal="#modal-1">+</BtnModal>);
    }

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