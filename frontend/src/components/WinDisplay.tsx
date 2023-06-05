import React, {ChangeEvent, useState} from 'react';
import "./WinDisplay.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";


type Props = {
    score: number,
    remainingTime: number,
    numberOfSteps: number,
}
function WinDisplay(props:Props) {
    const [inputValue, setInputValue] = useState("")
    const nav = useNavigate();
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

    function addScore() {
        axios.post("/api/randm/highscore", {
            playerName: inputValue,
            score: props.score,
            remainingTime: props.remainingTime,
            numberOfSteps: props.numberOfSteps
        })
            .then(() => {
                nav("/highscorelist")
            });
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addScore();
        }
    };

    const handleInputFocus = () => {
        setIsPlaceholderVisible(false);
    };

    const handleInputBlur = () => {
        if (inputValue === '') {
            setIsPlaceholderVisible(true);
        }
    };


    return (
        <div className="score-window">
            <h2>Congratulations! You won!</h2>
                <p>Your score: {props.score} / 10 points !</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Add your name "
            />
            <div className="score-buttons-container">
                <button className="score-buttons" onClick={addScore}>Submit Highscore</button>
            </div>
        </div>

    );
}

export default WinDisplay;