import React from 'react';
import Social from '../Header/Social';
import './Profile.css';
import Summary from './Summary';
import MainStage from '../Main/MainStage';

export default function Profile() {
  return (
    <>
      <Social />
      {/* <Footer /> */}
      <Summary />
      {/* <MainPage /> */}
      <MainStage />
      {/* <Experience /> */}
    </>
  );
}
