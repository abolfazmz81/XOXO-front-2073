import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import "./gamedesign.css";

const GameDesign = () =>{
    let win = 0;
    const navigate = useNavigate();
    const location = useLocation();
    const { playerOne, playerTwo } = location.state || { playerOne: "", playerTwo: "" };

    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const checkwinner = async (board)=>{
        if(board[0] == board[1] && board[0] == board[2  ] && board[0]!=""){win = 1}
        if(board[0] == board[3] && board[0] == board[6] && board[0]!=""){win = 1}
        if(board[0] == board[4] && board[0] == board[8] && board[0]!=""){win = 1}
        if(board[1] == board[4] && board[1] == board[7] && board[1]!=""){win = 1}
        if(board[2] == board[5] && board[2] == board[8] && board[2]!=""){win = 1}
        if(board[2] == board[4] && board[2] == board[6] && board[2]!=""){win = 1}
        if(board[3] == board[4] && board[3] == board[5] && board[3]!=""){win = 1}
        if(board[6] == board[7] && board[6] == board[8] && board[6]!=""){win = 1}

        if(win == 1){
            let data = [];
            if(currentPlayer == "X"){
                alert("player " + playerOne + " is the winner");
                data = [
                    {
                      name: playerOne,
                      status: "WIN"
                    },
                    {
                      name: playerTwo,
                      status: "LOSE"
                    }
                  ];
            }
            else{
                alert("player " + playerTwo + " is the winner");
                data = [
                    {
                      name: playerTwo,
                      status: "WIN"
                    },
                    {
                      name: playerOne,
                      status: "LOSE"
                    }
                  ];
            }

            try{
                const response = await fetch("http://127.0.0.1:8000/scores", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });

                  if (!response.ok) {
                    alert('Network response was not ok');
                  }
            }
            catch(error){
                console.error('Error sending POST request:', error);
            }
            navigate("/login");
        }
    }

    const handleClick = (index) => {
        // Check if the cell is already filled
        if (board[index] !== "") return;

        // Update the board with the current player's sign
        const newBoard = board.slice();
        newBoard[index] = currentPlayer;
        checkwinner(newBoard);
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