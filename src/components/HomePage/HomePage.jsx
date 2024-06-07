import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Navigate, useNavigate } from "react-router-dom";



const HomePage = () =>{
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login'); 
    };
    const handleScoresClick = () => {
        navigate('/scores'); 
    };
    return(
        <div className="All d-flex  flex-column align-items-center justify-content-around" > 
            <Header/>
            <div className="d-flex flex-column align-items-center"> 
                <div className="start btn btn-light btn-lg" onClick={handleStartClick}> START</div>
                <div className="scores btn mt-4" onClick={handleScoresClick} > SCORES </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;