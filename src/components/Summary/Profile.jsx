import React from 'react';
import Navbar from '../Header/Navbar';
import Social from '../Header/Social';
import './Profile.css';
import Summary from './Summary';
import MainStage from '../Main/MainStage';

export default function Profile() {
  return (
    <>
      <Navbar />
      <Social />
      {/* <Footer /> */}
      <Summary />
      {/* <MainPage /> */}
      <MainStage />
      {/* <Experience /> */}
    </>
  );
}
