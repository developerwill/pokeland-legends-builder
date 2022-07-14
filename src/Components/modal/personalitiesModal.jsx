import React, { useContext } from 'react';
import ImgSelect from '../pokemonImg/imgSelect';
import { BuildContext } from '../../Data/Context/buildData';

const PersonalitiesModal = () => {//Ponto 5 criar um modal novo e alterar os caminhos para ler os dados 
    const { personalities } = useContext(BuildContext) //Ponto 6 carregar os dados do json

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="personalities-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div id="personalities" className="modal-body purple-bk-darker d-flex flex-wrap justify-content-center">
                        {personalities.length > 0 &&
                            Object.values(personalities).map(function (personality, index) {
                                return (
                                    <div key={index}>
                                        <div className="d-md-none">
                                            <ImgSelect item={personality.info.name} itemType={'personality'} itemIndex={index + 1} classes="blue-border border-small m-1 img-fluid img-select" src={`assets/img/personalities/mobile/${personality.info.picture}`} alt="butt">{personality.info.name}</ImgSelect>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <ImgSelect item={personality.info.name} itemType={'personality'} itemIndex={index + 1} classes="blue-border border-small m-1 img-fluid img-select" src={`assets/img/personalities/${personality.info.picture}`} alt="butt">{personality.info.name}</ImgSelect>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PersonalitiesModal;