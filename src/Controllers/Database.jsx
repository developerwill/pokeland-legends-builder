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

    let buildsArray = []
    let addNew = useRef(true)

    function saveBuild(buildData) {
        currentBuild.current =
        {
            id: buildKey.current,
            buildData,
            likes: 150,
            dislikes: 15
        }

        if (!localStorage.getItem('builds')) {
            buildsArray.push(currentBuild.current)
            localStorage.setItem('builds', JSON.stringify(buildsArray))
            addNew.current = false
        } else if (addNew.current === true) {
            addNew.current = false
            const getLocalStorage = JSON.parse(localStorage.getItem('builds'))

            buildsArray.push(...getLocalStorage)
            buildsArray.push(currentBuild.current)
            localStorage.setItem('builds', JSON.stringify(buildsArray))
        }
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