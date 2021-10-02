import './MainBanner.scss';
import React from 'react';
import brm from '../../../../../assets/images/banner-right-image.png';
import {useTranslation} from 'react-i18next';
import Subscribtion from '../../../../common/subscribtion/subscribtion';

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
                  <h6>{t('mainBunner.welcome')}</h6>
                  <h2>
                    {t('mainBunner.header1')}{' '}
                    <em>{t('mainBunner.dropShipping')}</em> &amp;{' '}
                    <span>{t('mainBunner.eCommerce')}</span>{' '}
                    {t('mainBunner.header2')}
                  </h2>
                  <p>{t('mainBunner.description')}</p>
                  {/* <form id="search" action="#" method="GET">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <button
                        type="submit"
                        className="main-button"
                        style={{
                          left: i18n.language === 'en' ? 'unset' : '10px',
                          right: i18n.language === 'en' ? '10px' : 'unset',
                        }}>
                        Subsribe
                      </button>
                    </fieldset>
                  </form> */}
                  <Subscribtion />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image">
                  <img src={brm} alt="team meeting" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
