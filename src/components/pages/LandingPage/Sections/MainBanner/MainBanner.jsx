import './MainBanner.scss';
import React from 'react';
import brm from '../../../../../assets/images/banner-right-image.png';
import {useTranslation} from 'react-i18next';
import Subscribtion from '../../../../common/subscribtion/subscribtion';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const MainBanner = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content header-text">
                  <Bounce bottom duration={1050}>
                    <h6>{t('mainBunner.welcome')}</h6>
                  </Bounce>
                  <Fade top big duration={1000}>
                    <h2>
                      {t('mainBunner.header1')}{' '}
                      <em>{t('mainBunner.dropShipping')}</em> &amp;{' '}
                      <span>{t('mainBunner.eCommerce')}</span>{' '}
                      {t('mainBunner.header2')}
                    </h2>
                  </Fade>
                  <Bounce top duration={1250}>
                    <p>{t('mainBunner.description')}</p>
                  </Bounce>
                  <Fade big duration={2500}>
                    <Subscribtion />
                  </Fade>
                </div>
              </div>
              <div className="col-lg-6">
                <Bounce left duration={1000}>
                  <div className="right-image">
                    <img src={brm} alt="team meeting" />
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
