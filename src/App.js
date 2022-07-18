import React from 'react';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/pricing' element={<Pricing/>} />
    </Routes>
  );
}

export default App
