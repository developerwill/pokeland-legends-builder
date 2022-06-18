import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import pokedexDataContext, { pokedex } from "./Data/pokedexDataContext";


import SearchPokemonForm from "./Components/forms/searchPokemon";
import Navbar from "./Views/template/navbar/navbar";
import Content from "./Views/content";
import OffcanvasBase from "./Components/offcanvas/offcanvasBase";

function App() {
    const [state, setState] = useState(pokedex)

    return (
        <pokedexDataContext.Provider value={{ state, setState }}>
            <Router>
                <Navbar />
                <Content></Content>
                <OffcanvasBase id="offcanvas-search-1">
                    <SearchPokemonForm searchByAbility={false} />
                </OffcanvasBase>
            </Router>
        </pokedexDataContext.Provider>
    );
}

export default App;
