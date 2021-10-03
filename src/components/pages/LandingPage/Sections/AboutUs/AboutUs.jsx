import './AboutUs.scss';
import React from 'react';
import {useTranslation} from 'react-i18next';
import ali from '../../../../../assets/images/about-left-image.png';
import si1 from '../../../../../assets/images/service-icon-01.png';
import si2 from '../../../../../assets/images/service-icon-02.png';
import si3 from '../../../../../assets/images/service-icon-03.png';
import si4 from '../../../../../assets/images/service-icon-04.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const AboutUs = () => {
  const {t, i18n} = useTranslation();
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Bounce top duration={750} cascade>
              <div className="left-image ">
                <img src={ali} alt="person graphic" />
              </div>
            </Bounce>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <Bounce bottom duration={1000} cascade>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item  ">
                      <div className="icon">
                        <img src={si1} alt="reporting" />
                      </div>
                      <div className="right-text">
                        <h4>{t('about.header1')}</h4>
                        <p>{t('about.description1')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item  ">
                      <div className="icon">
                        <img src={si2} alt="" />
                      </div>
                      <div className="right-text">
                        <h4>{t('about.header2')}</h4>
                        <p>{t('about.description2')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item  ">
                      <div className="icon">
                        <img src={si3} alt="" />
                      </div>
                      <div className="right-text">
                        <h4>{t('about.header3')}</h4>
                        <p>{t('about.description3')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item  ">
                      <div className="icon">
                        <img src={si4} alt="" />
                      </div>
                      <div className="right-text">
                        <h4>{t('about.header4')}</h4>
                        <p>{t('about.description4')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
