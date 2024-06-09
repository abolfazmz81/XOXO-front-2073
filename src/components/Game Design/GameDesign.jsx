import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import "./gamedesign.css";

const GameDesign = () =>{
    const location = useLocation();
    const { playerOne, playerTwo } = location.state || { playerOne: "", playerTwo: "" };

    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const handleClick = (index) => {
        // Check if the cell is already filled
        if (board[index] !== "") return;

        // Update the board with the current player's sign
        const newBoard = board.slice();
        newBoard[index] = currentPlayer;

        // Update the state
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    return(
        <div className="All d-flex  flex-column align-items-center justify-content-evenly">
            <Header/>
            <div className="container-xxl d-flex flex-column text-center flex-4 justify-content-between">
                <div className="d-flex  justify-content-between">
                    <h4 className="text-white">X is: {playerOne}</h4>
                    <h4 className="text-white">O is: {playerTwo}</h4>
                </div>
                <div className="board container d-flex flex-column justify-content-center align-items-center">
                    <div className="row w-100">
                        {board.map((cell, index) => (
                            <div 
                                key={index}
                                className="col-4 cell d-flex justify-content-center align-items-center"
                                onClick={() => handleClick(index)}
                            >
                                {cell === "X" && <span className="text-red">{cell}</span>}
                                {cell === "O" && <span className="text-blue">{cell}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDesign;