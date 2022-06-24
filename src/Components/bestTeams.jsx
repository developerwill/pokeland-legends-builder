import React from 'react';

const BestTeams = ({ children, id, title, pokemonName }) => {
    return (
        <div id={id} className="row">
            <div className="col-12 d-flex flex-column text-center">

                {title && (
                    <p className="best-teams yellow">{title}
                        <br></br>
                        {pokemonName}
                    </p>
                )}

                <div className="row best-teams">
                    <div className="row d-flex justify-content-center ms-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BestTeams;