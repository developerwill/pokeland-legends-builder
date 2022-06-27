import React from 'react';
import SideInfo from '../../Components/sideInfo';
import Builder from '../../Components/builderContent';
import AbilitiesModal from '../../Components/modal/abilitiesModal';
import PokemonInfo from '../../Components/pokemonInfo';
import CopyLinkHeader from '../template/header/copyLink';
import Textarea from '../../Components/forms/textarea';

const BuilderPage = (props) => {
    const isLoggedIn = false;
    const isBuilding = true;

    return (
        <>
            <CopyLinkHeader />
            <SideInfo classes="col mb-4 mb-lg-0 me-lg-3 pb-3">
                <PokemonInfo isLoggedIn={isLoggedIn} isBuilding={isBuilding} />
                {isLoggedIn &&
                    <Textarea classes="mt-3">
                        Build Notes
                    </Textarea>
                }
            </SideInfo>
            <Builder />
            <AbilitiesModal></AbilitiesModal>
        </>
    );
}
export default BuilderPage;