import React from 'react';
import SearchPokemonForm from '../forms/searchPokemon';

const TeamMatesModal = () => {

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="teammates-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker text-center">
                        <SearchPokemonForm searchType="teamSearch" dismiss={'modal'}></SearchPokemonForm>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TeamMatesModal;