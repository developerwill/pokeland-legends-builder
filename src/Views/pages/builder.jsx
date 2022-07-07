import React from 'react';
import SideInfo from '../../Components/sideInfo';
import Builder from '../../Components/builderContent';
import AbilitiesModal from '../../Components/modal/abilitiesModal';
import PokemonInfo from '../../Components/pokemonInfo';
import BuilderHeader from '../template/header/builderHeader';
import Textarea from '../../Components/forms/textarea';
import { BuildProvider } from '../../Data/Context/buildData';
import TeamMatesModal from '../../Components/modal/teamMateModal';

const BuilderPage = (props) => {
    const isLoggedIn = false;
    const isBuilding = true;

    return (
        <BuildProvider>
            <BuilderHeader />
            <SideInfo classes="col mb-4 mb-lg-0 me-lg-3 pb-3">
                <PokemonInfo isLoggedIn={isLoggedIn} isBuilding={isBuilding} />
                {isLoggedIn &&
                    <Textarea classes="mt-3">
                        Build Notes
                    </Textarea>
                }
            </SideInfo>
            <Builder />
            <TeamMatesModal />
            <AbilitiesModal />
        </BuildProvider>
    );
}
export default BuilderPage;