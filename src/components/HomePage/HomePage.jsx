import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import Header from "../common/Header";
import Footer from "../common/Footer";



const HomePage = () =>{
    return(
        <div className="All d-flex  flex-column align-items-center justify-content-around" > 
            <Header/>
            <div className=""> 
        
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;