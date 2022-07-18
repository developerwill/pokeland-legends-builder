import React, { createContext, useContext, useState, useRef } from 'react';
import cryptoRandomString from 'crypto-random-string';
import { AppConfigContext } from '../Config/App';
import { PokedexContext } from '../Data/Context/pokemonData';

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
    const { site_url } = useContext(AppConfigContext)
    const { pokemonData } = useContext(PokedexContext)
    const buildKey = useRef(cryptoRandomString({ length: 11, type: 'alphanumeric' }))
    const [buildUrl, setBuildUrl] = useState()
    const currentBuild = useRef()

    function saveBuild(buildData) {
        currentBuild.current =
        {
            id: buildKey.current,
            buildData,
            likes: 150,
            dislikes: 15
        }

        localStorage.setItem(buildKey.current, JSON.stringify(currentBuild.current))
        getBuildUrl()
    }

    function getBuildUrl() {
        setBuildUrl(site_url(pokemonData.name.pokeland.toLowerCase().replace(/\s+/g, '-') + '/' + buildKey.current))
        return buildUrl
    }

    return (
        <DatabaseContext.Provider value={{ saveBuild, buildUrl }}>
            {children}
        </DatabaseContext.Provider>
    );
}