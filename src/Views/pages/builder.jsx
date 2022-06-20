import React from 'react';
import SideInfo from '../../Components/sideInfo';
import Builder from '../../Components/builderContent';
import Modal from '../../Components/modal/modal';
import PokemonInfo from '../../Components/pokemonInfo';
import CopyLinkHeader from '../template/header/copyLink';
import Textarea from '../../Components/forms/textarea';

import { PokemonDataProvider } from '../../Data/Context/pokemonData';

const BuilderPage = (props) => {
    const isLoggedIn = true;

    return (
        <PokemonDataProvider pokemonID={69}>
            <CopyLinkHeader />
            <SideInfo classes="col mb-4 mb-lg-0 me-lg-3 pb-3">
                <PokemonInfo isLoggedIn={isLoggedIn} />
                {isLoggedIn &&
                    <Textarea classes="mt-3">
                        Build Notes
                    </Textarea>
                }
            </SideInfo>
            <Builder />
            <Modal></Modal>
        </PokemonDataProvider>
    );
}
export default BuilderPage;