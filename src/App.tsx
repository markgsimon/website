import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Design from './pages/Design';
import Math from './pages/Math';
import Mutterings from './pages/Mutterings';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home></Home>}/>
    <Route path = "/Design" element = {<Design></Design>}/>
    <Route path = "/Math" element = {<Math></Math>}/>
    <Route path = "/Mutterings" element = {<Mutterings></Mutterings>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
