import './App.css';
import fische from './images/fische.png'
import DropdownMenu from "./dropdown/menu";
import React, {useState} from "react";
import useLoadRandMCharacters from "./hooks/useLoadRandMCharacters";
import CharacterGallery from "./characterGallery/CharacterGallery";
import {Route, Link, Routes} from "react-router-dom";
import Game from "./characterGallery/Game";
import Home from "./Home/Home";
import useGetNRandomCards from "./hooks/useGetNRandomCards";
import useLoadGoTCharacters from "./got/hooks/useLoadGoTCharacters";
import CharacterGalleryGoT from "./got/characterGallery/CharacterGalleryGoT";
import Header from "./components/Header";
import HighscoreList from "./highscoreList/HighscoreList";
import {CardCharacter} from "./model/CardCharacter";


function App() {
    const {characters} = useLoadRandMCharacters();
    const {cards, loadRandomCharacters} = useGetNRandomCards();
    const [counter, setCounter] = useState<number>(0);
    const [character] = useState('');
    const [gotCharacter, setCharacter] = useState("");
    const {gameOfThronesCharacters} = useLoadGoTCharacters();
    const gotCards:CardCharacter[] =
        [
            {
                "uuid": "0",
                "id": 0,
                "name": "Daenerys Targaryen",
                "image": "https://thronesapi.com/assets/images/daenerys.jpg",
                "hidden": true,
                "comparison": "House Targaryen"
            },
            {
                "uuid": "1",
                "id": 1,
                "name": "Targaryen2",
                "image": "https://thronesapi.com/assets/images/daenerys.jpg",
                "hidden": true,
                "comparison": "House Targaryen"
            }
        ];
    const mixedCardSet = [...cards, ...gotCards];


    function playButtonHandler(){
        loadRandomCharacters();
        setCounter(0);
    }


    return (

        <div style={{ backgroundImage: "url('https://cdnb.artstation.com/p/assets/images/images/019/672/653/large/mohammed-gadi-rnm.jpg?1564526784')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
            <header>
            <Header playButtonHandler={playButtonHandler}/>
            </header>
                <Routes>
                    <Route path="/" element={<Home character={character}/>} />
                    <Route path="/play" element={
                        <div className="gameBoard">
                            <Game cards={mixedCardSet} counter={counter} setCounter={setCounter} />
                        </div>}
                    />
                    <Route path="/highscorelist" element={<HighscoreList />} />
                    <Route path="/rickandmortygallery" element={<CharacterGallery characters={characters} />} />
                    <Route path="/gameofthronesgallery" element=
                        {<CharacterGalleryGoT gotCharacter={gameOfThronesCharacters}/>}/>
                </Routes>
        </div>

);
}

export default App;
