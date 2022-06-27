import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPokemonForm from "./Components/forms/searchPokemon";
import Navbar from "./Views/template/navbar/navbar";
import Content from "./Views/content";
import OffcanvasBase from "./Components/offcanvas/offcanvasBase";
import { PokedexProvider } from "./Data/Context/pokemonData";
import { AppConfig } from "./Config/App";

function App() {
    return (
        <AppConfig>
            <PokedexProvider>
                <Router>
                    <Navbar />
                    <Content></Content>
                    <OffcanvasBase id="offcanvas-search-1">
                        <SearchPokemonForm searchByAbility={false} />
                    </OffcanvasBase>
                </Router>
            </PokedexProvider>
        </AppConfig>
    );
}

export default App;
