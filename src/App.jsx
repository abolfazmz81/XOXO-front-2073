import React from 'react';
import { useState } from 'react';
import './App.css';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Table from './components/Table/Table';
import GameDesign from './components/Game Design/GameDesign';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/scores' element={<Table/>} />
            <Route path='/play' element={<GameDesign/>} />
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App