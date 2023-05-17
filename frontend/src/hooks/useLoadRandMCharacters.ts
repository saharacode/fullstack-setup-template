import React, {useEffect, useState} from 'react';
import axios from "axios";
import {RandMCharacter} from "../model/RandMCharacter";

function UseLoadRandMCharacters() {
    const [characters, setCharacters] = useState<RandMCharacter[]>([])

    useEffect(loadCharacters,[])

    function loadCharacters(url: string = 'http://localhost:8080/api/randm/characters') {
        axios.get(url).then(response => {
            setCharacters(response.data)
        })
    }

    return {characters};
}

export default UseLoadRandMCharacters;