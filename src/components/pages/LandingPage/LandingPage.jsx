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

const LandingPage = (props) => {
  return (
    <>
      <NavBar />
      <MainBanner />
{/*       <FancyAnimation/> */}
      <AboutUs />
      <Services/>
      <ContactUs/>
      <Footer />
      {/*  <LanguageSelector/> */}
    </>
  );
};

export default LandingPage;
