import React from 'react';
import Navbar from '../Header/Navbar';
import Social from '../Header/Social';
import './Profile.css';
import Summary from './Summary';
import MainStage from '../Main/MainStage';
import MainPage from '../Main/MainPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import Experience from '../Sandbox/Experience';

export default function Profile() {
  return (
    <>
      <Navbar />
      <Social />
      <ParallaxProvider>
        <Summary />
        <MainPage />
        <MainStage />
        <Experience />
      </ParallaxProvider>
    </>
  );
}
