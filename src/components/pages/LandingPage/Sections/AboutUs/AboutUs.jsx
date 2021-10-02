import './AboutUs.scss';
import React from 'react';
import ali from '../../../../../assets/images/about-left-image.png';
import si1 from '../../../../../assets/images/service-icon-01.png';
import si2 from '../../../../../assets/images/service-icon-02.png';
import si3 from '../../../../../assets/images/service-icon-03.png';
import si4 from '../../../../../assets/images/service-icon-04.png';

const AboutUs = () => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-image ">
              <img src={ali} alt="person graphic" />
            </div>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item  ">
                    <div className="icon">
                      <img src={si1} alt="reporting" />
                    </div>
                    <div className="right-text">
                      <h4>Data Analysis</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item  ">
                    <div className="icon">
                      <img src={si2} alt="" />
                    </div>
                    <div className="right-text">
                      <h4>Data Reporting</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item  ">
                    <div className="icon">
                      <img src={si3} alt="" />
                    </div>
                    <div className="right-text">
                      <h4>Web Analytics</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item  ">
                    <div className="icon">
                      <img src={si4} alt="" />
                    </div>
                    <div className="right-text">
                      <h4>SEO Suggestions</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
