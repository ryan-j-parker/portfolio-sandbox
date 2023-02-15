import React from 'react';
import Navbar from './Navbar';
import Social from './Social';
import './Profile.css';
import Summary from './Summary';
// import { ParallaxProvider } from 'react-scroll-parallax';

export default function Profile() {
  return (
    <div>
      {/* <img src="/r-semi-p-fav-crop-178-x-106-tx.png" alt="Ryan Parker" className="profile-img" />   */}
      {/* <ParallaxProvider> */}
      <Navbar />
      <Social />
      <Summary />
      {/* </ParallaxProvider> */}
    </div>
  );
}
