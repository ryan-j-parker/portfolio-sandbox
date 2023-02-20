import React from 'react';
import Navbar from './Navbar';
import Social from './Social';
import './Profile.css';
import Summary from './Summary';
import MainStage from './MainStage';
import MainPage from './MainPage';
// import { ParallaxProvider } from 'react-scroll-parallax';

export default function Profile() {
  return (
    <>
      {/* <img src="/r-semi-p-fav-crop-178-x-106-tx.png" alt="Ryan Parker" className="profile-img" />   */}
      <Navbar />
      <Social />
      <MainPage />
      {/* <MainStage /> */}
      {/* <Summary /> */}
    </>
  );
}
