import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12">
            <p>
              © Copyright 2021 Jumla.com. All Rights Reserved.
              <br />
              Design:{' '}
              <a rel="nofollow" href="https://www.linkedin.com/in/heshamsalehmohammed/">
                Hesham
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
