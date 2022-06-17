import React from 'react';

import SideInfo from '../../Components/sideInfo';
import LatestBuilds from '../../Components/latestBuilds';
import Modal from '../../Components/modal/modal';
import HomepageHeader from '../template/header/homepage';
import SearchPokemonForm from '../../Components/forms/searchPokemon';

const Homepage = (props) => {

    return (
        <>
            <HomepageHeader />
            <SideInfo classes="col me-lg-3 mb-4 pb-3 pe-0 d-none d-sm-block">
                <SearchPokemonForm searchByAbility={false} />
            </SideInfo>
            <LatestBuilds />
            <Modal></Modal>
        </>
    );
}
export default Homepage;