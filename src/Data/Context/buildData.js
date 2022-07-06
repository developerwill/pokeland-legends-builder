import React, { useRef, createContext, useContext, useState, useEffect } from 'react';
import { PokedexContext } from './pokemonData';
//import cryptoRandomString from 'crypto-random-string';
//import { AppConfigContext } from '../../Config/App';
import uuid from 'uuidv4';

export const BuildContext = createContext();

export const BuildProvider = ({ children }) => {
    const buildData = useRef()
    const [btnPressed, setBtnPressed] = useState()
    const { pokemonData, getSprite } = useContext(PokedexContext)
    const [buildUpdated, setBuildUpdate] = useState()
    //const teammates = useRef([])
    const [teammates, setTeammates] = useState()
    const teammate_1 = useRef()
    const teammate_2 = useRef()
    const teammate_3 = useRef()
    const teammate_4 = useRef()
    //const currentTeammate = useRef()

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
    const gear_1 = useRef()
    const gear_2 = useRef()
    const gear_3 = useRef()
    const gear_4 = useRef()
    const hiddenSkill_1 = useRef()
    const hiddenSkill_2 = useRef()
    const hiddenSkill_3 = useRef()
    const hiddenSkill_4 = useRef()
    const hiddenSkill_5 = useRef()
    const hiddenSkill_6 = useRef()
    const hiddenSkill_7 = useRef()
    const hiddenSkill_8 = useRef()
    const hiddenSkill_9 = useRef()
    const hiddenSkill_10 = useRef()
    const hiddenSkill_11 = useRef()
    const hiddenSkill_12 = useRef()

    function getBtnKey(key) {
        setBtnPressed(key)
    }

    function updateBuild(item) {
        addItem(item)

        buildData.current =
        {
            id: pokemonData.id,
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
            personalities: {
                personality_1: personality_1.current,
                personality_2: personality_2.current,
                personality_3: personality_3.current,
                personality_4: personality_4.current,
            },
            heldItems: {
                heldItem_1: heldItem_1.current,
                heldItem_2: heldItem_2.current,
                heldItem_3: heldItem_3.current,
                heldItem_4: heldItem_4.current,
            },
            gear: {
                gear_1: gear_1.current,
                gear_2: gear_2.current,
                gear_3: gear_3.current,
                gear_4: gear_4.current,
            },
            hiddenSkills: {
                hiddenSkill_1: hiddenSkill_1.current,
                hiddenSkill_2: hiddenSkill_2.current,
                hiddenSkill_3: hiddenSkill_3.current,
                hiddenSkill_4: hiddenSkill_4.current,
                hiddenSkill_5: hiddenSkill_5.current,
                hiddenSkill_6: hiddenSkill_6.current,
                hiddenSkill_7: hiddenSkill_7.current,
                hiddenSkill_8: hiddenSkill_8.current,
                hiddenSkill_9: hiddenSkill_9.current,
                hiddenSkill_10: hiddenSkill_10.current,
                hiddenSkill_11: hiddenSkill_11.current,
                hiddenSkill_12: hiddenSkill_12.current,
            },
        }

        setBuildUpdate(uuid())
    }

    function addItem(item) {
        if (btnPressed === 1) ability_1.current = item
        if (btnPressed === 2) ability_2.current = item
        if (btnPressed === 3) ability_3.current = item
        if (btnPressed === 4) ability_4.current = item
        if (btnPressed === 5) ability_5.current = item
        if (btnPressed === 6) ability_6.current = item
        if (btnPressed === 7) ability_7.current = item
        if (btnPressed === 8) ability_8.current = item
        if (btnPressed === 9) personality_1.current = item
        if (btnPressed === 10) personality_2.current = item
        if (btnPressed === 11) personality_3.current = item
        if (btnPressed === 12) personality_4.current = item
        if (btnPressed === 13) heldItem_1.current = item
        if (btnPressed === 14) heldItem_2.current = item
        if (btnPressed === 15) heldItem_3.current = item
        if (btnPressed === 16) heldItem_4.current = item
        if (btnPressed === 17) gear_1.current = item
        if (btnPressed === 18) gear_2.current = item
        if (btnPressed === 19) gear_3.current = item
        if (btnPressed === 20) gear_4.current = item
        if (btnPressed === 21) hiddenSkill_1.current = item
        if (btnPressed === 22) hiddenSkill_2.current = item
        if (btnPressed === 23) hiddenSkill_3.current = item
        if (btnPressed === 24) hiddenSkill_4.current = item
        if (btnPressed === 25) hiddenSkill_5.current = item
        if (btnPressed === 26) hiddenSkill_6.current = item
        if (btnPressed === 27) hiddenSkill_7.current = item
        if (btnPressed === 28) hiddenSkill_8.current = item
        if (btnPressed === 29) hiddenSkill_9.current = item
        if (btnPressed === 30) hiddenSkill_10.current = item
        if (btnPressed === 31) hiddenSkill_11.current = item
        if (btnPressed === 32) hiddenSkill_12.current = item
    }

    function updateTeammate(pokemonID) {
        if (btnPressed === 1) teammate_1.current = getSprite(pokemonID)
        if (btnPressed === 2) teammate_2.current = getSprite(pokemonID)
        if (btnPressed === 3) teammate_3.current = getSprite(pokemonID)
        if (btnPressed === 4) teammate_4.current = getSprite(pokemonID)

        setTeammates(
            {
                teammate_1: teammate_1.current,
                teammate_2: teammate_2.current,
                teammate_3: teammate_3.current,
                teammate_4: teammate_4.current
            }
        )
    }

    return (
        <BuildContext.Provider value={{ buildData, updateBuild, getBtnKey, buildUpdated, updateTeammate, teammates }}>
            {children}
        </BuildContext.Provider>
    );
}