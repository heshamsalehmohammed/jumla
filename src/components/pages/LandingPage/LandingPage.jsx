import './LandingPage.scss';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../../common/navBar/navBar';
import MainBanner from './Sections/MainBanner/MainBanner';
import AboutUs from './Sections/AboutUs/AboutUs';
import LanguageSelector from '../../common/LanguageSelector';

const LandingPage = (props) => {
  return (
    <>
      <NavBar />
      <MainBanner />
      <AboutUs />
      {/*  <LanguageSelector/> */}
    </>
  );
};

export default LandingPage;
