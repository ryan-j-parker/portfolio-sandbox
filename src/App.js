import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import MainStage from './components/Main/MainStage';
import AltCanvas from './components/Main/AltCanvas';
import Social from './components/Header/Social';
import { Portfolio } from './components/Summary/Portfolio';
import FrameCycle from './components/Main/FrameCycle';
import AppNavBar from './components/Header/AppNavBar';
import Scrollable from './components/Sandbox/Scrollable';

function App() {
  return (
    <div className="App">
      <Social />
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/RJP-SWE-resume-2023.pdf" />
        <Route path="/projects3d" element={<MainStage />} />
        <Route path="/altCanvas" element={<AltCanvas />} />
        <Route path="/projects2d" element={<FrameCycle />} />
        <Route path="/email" element={<Scrollable />} />
      </Routes>
    </div>
  );
}

export default App;
