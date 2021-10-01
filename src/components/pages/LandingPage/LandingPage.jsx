import './LandingPage.scss';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../../common/navBar/navBar';
import MainBanner from './Sections/MainBanner/MainBanner';
import LanguageSelector from '../../common/LanguageSelector';

const LandingPage = (props) => {
  return (
    <>
      <NavBar />
      <MainBanner />
      {/*  <LanguageSelector/> */}
    </>
  );
};

export default LandingPage;
