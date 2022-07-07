import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPokemonForm from "./Components/forms/searchPokemon";
import Navbar from "./Views/template/navbar/navbar";
import Content from "./Views/content";
import OffcanvasBase from "./Components/offcanvas/offcanvasBase";
import { PokedexProvider } from "./Data/Context/pokemonData";
import { AppConfig } from "./Config/App";
import { BuildProvider } from "./Data/Context/buildData";

function App() {
    return (
        <AppConfig>
            <PokedexProvider>
                <BuildProvider>
                    <Router>
                        <Navbar />
                        <Content></Content>
                        <OffcanvasBase id="offcanvas-search-1">
                            <SearchPokemonForm dismiss={'offcanvas'} />
                        </OffcanvasBase>
                    </Router>
                </BuildProvider>
            </PokedexProvider>
        </AppConfig>
    );
}

export default App;
