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
        <div></div>
    );
};

export default GameDesign;