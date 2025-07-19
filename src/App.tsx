import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Math from './pages/Math';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home></Home>}/>
    <Route path = "/Math" element = {<Math></Math>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
