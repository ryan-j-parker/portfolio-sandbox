import React from 'react';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="page" id="p1">
        <div className="nameBox">
          <h2 className="projName">Sound Palette</h2>
        </div>
        <img src="/projects/sq-sound-palette.png" alt="Sound Palette" className="projImg" />
        <p className="projDesc"></p>
      </div>
      <div className="page" id="p2">
        <div className="nameBox">
          <h2 className="projName">Collabo</h2>
        </div>
        <img src="/projects/sq-collabo.png" alt="Collabo" className="projImg" />
        <p className="projDesc"></p>
      </div>
      <div className="page" id="p3">
        <div className="nameBox">
          <h2 className="projName">Escape from Terminal Forest</h2>
        </div>
        <img src="/projects/sq-sound-palette.png" alt="Escape from Terminal Forest" className="projImg" />
        <p className="projDesc"></p>
      </div>
      <div className="page" id="p4">
        <div className="nameBox">
          <h2 className="projName">Marble Ninja Warrior</h2>
        </div>
        <img src="/projects/sq-marble-runner.png" alt="Marble Runner" className="projImg" />
        <p className="projDesc"></p>
      </div>
      <div className="page" id="p5"></div>
      <div className="page" id="p6"></div>
    </div>
  );
}
