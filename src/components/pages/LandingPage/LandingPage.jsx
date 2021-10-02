import './LandingPage.scss';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../../common/navBar/navBar';
import Footer from '../../common/footer/footer';
import MainBanner from './Sections/MainBanner/MainBanner';
import AboutUs from './Sections/AboutUs/AboutUs';
import LanguageSelector from '../../common/LanguageSelector';

const LandingPage = (props) => {
  return (
    <>
      <NavBar />
      <MainBanner />
      <AboutUs />
      <Footer />
      {/*  <LanguageSelector/> */}
    </>
  );
};

export default LandingPage;
