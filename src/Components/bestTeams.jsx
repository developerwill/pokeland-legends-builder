import React from 'react';

const BestTeams = (props) => {
    return (
        <div id={props.id} className="row">
            <div className="col-12 d-flex flex-column text-center">

                {props.title && (
                    <p className="best-teams yellow">{props.title}
                        <br></br>
                        {props.pokemonName}
                    </p>
                )}

                <div className="row best-teams">
                    <div className="row d-flex justify-content-center ms-1">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BestTeams;