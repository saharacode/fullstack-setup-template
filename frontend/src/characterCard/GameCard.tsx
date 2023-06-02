import React from 'react';
import './CharacterCard.css';
import {CardCharacter} from "../model/CardCharacter";


type Props={
    character:CardCharacter,
    increaseCounter: () => void,
    putCardsInArrayToCompare: (currentCard:CardCharacter) => void,
    counter:number
}

function GameCard(props:Props) {

    const {character} = props;


    function showCard() {
        character.hidden = false;
        props.increaseCounter();
        props.putCardsInArrayToCompare(character);
    }

    return (
        <div>
            {
                character.hidden
                ? <button className="card-back" onClick={showCard}></button>
                : <div className="character-card">
                    <img src={character.image}  alt={character.name}/>
                    <h3>{props.character.name}</h3>
                    <h4>{props.character.comparison}</h4>
                </div>
            }

        </div>

    );
}

export default GameCard;