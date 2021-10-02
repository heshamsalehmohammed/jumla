import './LandingPage.scss';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from '../../common/navBar/navBar';
import Footer from '../../common/footer/footer';
import MainBanner from './Sections/MainBanner/MainBanner';
import AboutUs from './Sections/AboutUs/AboutUs';
import ContactUs from './Sections/ContactUs/ContactUs';
import Services from './Sections/Services/Services';
import LanguageSelector from '../../common/LanguageSelector';
import FancyAnimation from './Sections/FancyAnimation/FancyAnimation';
import ScrollHandler from '../../common/ScrollHandler';
import {BrowserRouter} from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <>
      <NavBar />
      <ScrollHandler>
        <BrowserRouter>
          <MainBanner />
          <AboutUs />
          <Services />
          <ContactUs />
          <Footer />
        </BrowserRouter>
      </ScrollHandler>
    </>
  );
};

export default LandingPage;
