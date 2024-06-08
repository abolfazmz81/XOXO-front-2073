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
        <div className="All d-flex  flex-column align-items-center justify-content-around">
            <Header/>
            <div className=" d-flex flex-column justify-content-center align-items-center">
                <div className="h3 poppins text-white mb-4">Fill the Form</div>
                <form onSubmit={handleSubmit} className=" d-flex flex-column align-items-center">
                    <input
                    type="text"
                    placeholder="Enter Player One"
                    value={playerOne}
                    onChange={(e) => setPlayerOne(e.target.value)}
                    className="form-control mb-3 text-center textinput textholder"
                    required
                    />
                    <input
                    type="text"
                    placeholder="Enter Player Two"
                    value={playerTwo}
                    onChange={(e) => setPlayerTwo(e.target.value)}
                    className="form-control mb-3 text-center textinput textholder"
                    required
                    />
                    <button type="submit" className="submit btn btn-light btn-lg">
                    START GAME
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;