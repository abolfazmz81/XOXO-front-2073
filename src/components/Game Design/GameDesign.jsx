import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import "./gamedesign.css";

const GameDesign = () =>{
    const location = useLocation();
    const { playerOne, playerTwo } = location.state || { playerOne: "", playerTwo: "" };

    return(
        <div></div>
    );
};

export default GameDesign;