import React from 'react';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import {Router, Routes, Link,} from "react-router-dom";

function App() {
  return (
      <Routes>
      <Link path="/src/components/Home.jsx" element={<Home />} />
      <Link path="/src/components/Home.jsx" element={<About />} />
      <Link path="/src/components/Pricing.jsx" element={<Pricing />} />
    </Routes>
  );
}

export default App
