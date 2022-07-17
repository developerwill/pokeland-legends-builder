import React, { useRef, createContext, useContext, useState, useEffect } from 'react';
import { PokedexContext } from './pokemonData';
//import cryptoRandomString from 'crypto-random-string';
//import { AppConfigContext } from '../../Config/App';
//import uuid from 'uuidv4';

export const BuildContext = createContext();

export const BuildProvider = ({ children }) => {
    const [buildData, setBuildData] = useState()
    const [btnPressed, setBtnPressed] = useState()
    const { pokemonData, getSprite } = useContext(PokedexContext)
    const [teammates, setTeammates] = useState()

    //Ponto 9 Duplicar estas variáveis
    const [pokemonPersonalities, setPokemonPersonalities] = useState()
    const [personalities, setPersonalities] = useState([])

    const [pokemonHeldItems, setPokemonHeldItems] = useState()
    const [heldItems, setHeldItems] = useState([])

    const teammate_2 = useRef()
    const teammate_3 = useRef()
    const teammate_5 = useRef()
    const teammate_6 = useRef()

    const ability_1 = useRef()
    const ability_2 = useRef()
    const ability_3 = useRef()
    const ability_4 = useRef()
    const ability_5 = useRef()
    const ability_6 = useRef()
    const ability_7 = useRef()
    const ability_8 = useRef()

    const personality_1 = useRef()
    const personality_2 = useRef()
    const personality_3 = useRef()
    const personality_4 = useRef()

    const heldItem_1 = useRef()
    const heldItem_2 = useRef()
    const heldItem_3 = useRef()
    const heldItem_4 = useRef()
    const buildTitle = useRef()

    //Ponto extra 1 duplicar o useEffect para chamar os dados
    useEffect(() => {
        //fetch("https://pokeland-legends.club/api/pokemon/all")
        fetch("assets/personalities.json")
            .then(res => res.json())
            .then(
                (data) => {
                    setPersonalities(data);
                }
            )
    }, []);

    useEffect(() => {
        //fetch("https://pokeland-legends.club/api/pokemon/all")
        fetch("assets/held_items.json")
            .then(res => res.json())
            .then(
                (data) => {
                    setHeldItems(data);
                }
            )
    }, []);

    useEffect(() => {
        updateBuild()
        // eslint-disable-next-line
    }, [teammates, pokemonPersonalities, pokemonHeldItems])

    function getBtnKey(key) {
        setBtnPressed(key)
    }

    function updateBuildTitle(title) {
        buildTitle.current = title
    }

    //Ponto 10 Extrair as variáveis todas para além das abilities
    function updateBuild(item) {
        if (item)
            addItem(item)

        setBuildData({
            id: pokemonData.id,
            name: pokemonData.name.pokeland,
            buildTitle: buildTitle.current,
            picture: pokemonData.sprites.pokeland,
            abilities: {
                ability_1: ability_1.current,
                ability_2: ability_2.current,
                ability_3: ability_3.current,
                ability_4: ability_4.current,
                ability_5: ability_5.current,
                ability_6: ability_6.current,
                ability_7: ability_7.current,
                ability_8: ability_8.current,
            },
            personalities: pokemonPersonalities,
            heldItems: pokemonHeldItems,
            teammates: teammates
        })
    }

    //Ponto 11 Apagar as variavies todas menos as abilities
    function addItem(item) {
        if (btnPressed === 1) ability_1.current = item
        if (btnPressed === 2) ability_2.current = item
        if (btnPressed === 3) ability_3.current = item
        if (btnPressed === 4) ability_4.current = item
        if (btnPressed === 5) ability_5.current = item
        if (btnPressed === 6) ability_6.current = item
        if (btnPressed === 7) ability_7.current = item
        if (btnPressed === 8) ability_8.current = item
    }

    function updateTeammate(pokemonID) {
        if (btnPressed === 2) teammate_2.current = getSprite(pokemonID)
        if (btnPressed === 3) teammate_3.current = getSprite(pokemonID)
        if (btnPressed === 5) teammate_5.current = getSprite(pokemonID)
        if (btnPressed === 6) teammate_6.current = getSprite(pokemonID)

        setTeammates(
            {
                teammate_2: teammate_2.current,
                teammate_3: teammate_3.current,
                teammate_5: teammate_5.current,
                teammate_6: teammate_6.current
            }
        )
    }

    //Ponto 12 Duplicar esta função
    function updatePersonality(personality) {
        if (btnPressed === 1) personality_1.current = personality
        if (btnPressed === 2) personality_2.current = personality
        if (btnPressed === 3) personality_3.current = personality
        if (btnPressed === 4) personality_4.current = personality

        setPokemonPersonalities([
            personality_1.current,
            personality_2.current,
            personality_3.current,
            personality_4.current
        ])
    }

    function updateHelItem(heldItem) {
        if (btnPressed === 1) heldItem_1.current = heldItem
        if (btnPressed === 2) heldItem_2.current = heldItem
        if (btnPressed === 3) heldItem_3.current = heldItem
        if (btnPressed === 4) heldItem_4.current = heldItem

        setPokemonHeldItems([
            heldItem_1.current,
            heldItem_2.current,
            heldItem_3.current,
            heldItem_4.current
        ])
    }

    //Ponto 13 adicionar as duas novas variáveis no provider mais a função de fazer update do item
    return (
        <BuildContext.Provider value={{ buildData, updateBuild, getBtnKey, updateTeammate, teammates, updatePersonality, pokemonPersonalities, personalities, updateHelItem, pokemonHeldItems, heldItems, updateBuildTitle }}>
            {children}
        </BuildContext.Provider>
    );
}