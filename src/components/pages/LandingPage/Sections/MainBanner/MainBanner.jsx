import './MainBanner.scss';
import React from 'react';
import brm from '../../../../../assets/images/banner-right-image.png';

const MainBanner = () => {
  return (
    <div
      className="main-banner"
      id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content header-text">
                  <h6>Welcome to Jumla</h6>
                  <h2>
                    We Make <em>Digital Ideas</em> &amp; <span>SEO</span>{' '}
                    Marketing
                  </h2>
                  <p>
                    Space Dynamic is a professional looking HTML template using
                    a Bootstrap 5 (beta 2). This CSS template is free for you
                    provided by{' '}
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/page/1"
                      target="_parent">
                      TemplateMo
                    </a>
                    .
                  </p>
                  <form id="search" action="#" method="GET">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Your website URL..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <button type="submit" className="main-button">
                        Analyze Site
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image">
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