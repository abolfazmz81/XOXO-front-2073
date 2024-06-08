import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () =>{
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(playerOne == " " || playerTwo == " "){
            alert("one player name is space")
            return;
        }
        if(playerOne == playerTwo){
            alert("cant have two players with the same name")
            return;
        }
        // Pass player names to another component or navigate
        // Example of navigating to a game component with player names as state
        navigate("/play", { state: { playerOne, playerTwo } });
      };
    return(
        <div> bia </div>
    );
};

export default Login;