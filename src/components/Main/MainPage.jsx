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
        <p className="projDesc">
          An interactive music app that renders color gradients in a 3D environment by playing notes
          ona virtual keyboard. Built with a team of 4 in a 4-day-sprint using React and React Three
          Fiber.
        </p>
      </div>
      <div className="page" id="p2">
        <div className="nameBox">
          <h2 className="projName">Collabo</h2>
        </div>
        <img src="/projects/sq-collabo.png" alt="Collabo" className="projImg" />
        <p className="projDesc">
          An open-source collaborative music platform that allows musicians to remotely create and
          contribute to projects. Built with a team of 4 in a 4-day sprint using vanilla JS,
          Supabase for db, and the Waveform Playlist API.
        </p>
      </div>
      <div className="page" id="p3">
        <div className="nameBox">
          <h2 className="projName">Escape from Terminal Forest</h2>
        </div>
        <img
          src="/projects/sq-sound-palette.png"
          alt="Escape from Terminal Forest"
          className="projImg"
        />
        <p className="projDesc">
          A command-line application in which users interact with objects to find clues to aid their
          escape from a cabin in the woods. A full-stack application that uses a PostgreSQL database
          to store object data, a library of custom ASCII art assets, and RESTful routes built with
          Express and Node. Built with a team of 3 in a 3-day sprint & published as an NPM package.
        </p>
      </div>
      <div className="page" id="p4">
        <div className="nameBox">
          <h2 className="projName">Marble Ninja Warrior</h2>
        </div>
        <img src="/projects/sq-marble-runner.png" alt="Marble Runner" className="projImg" />
        <p className="projDesc">A 3D marble runner/obstacle avoidance game built with React Three Fiber and the Rapier physics library. Built as a solo project over 5 days to gain familiarity with the Three.js & WebGL ecosystem.</p>
      </div>
    </div>
  );
}
