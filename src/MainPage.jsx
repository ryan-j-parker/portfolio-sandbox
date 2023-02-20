import React from 'react';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="page" id="p1">
        <h2 className="projName">Sound Palette</h2>
        <img src="/projects/sq-sound-palette.png" alt="Sound Palette" className="projImg" />
        <p className="projDesc"></p>
      </div>
      <div className="page" id="p2"></div>
      <div className="page" id="p3"></div>
      <div className="page" id="p4"></div>
      <div className="page" id="p5"></div>
      <div className="page" id="p6"></div>
    </div>
  );
}
