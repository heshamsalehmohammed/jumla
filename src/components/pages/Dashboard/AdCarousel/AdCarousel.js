import './AdCarousel.scss';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bounce from 'react-reveal/Bounce';

const AdCarousel = (props) => {
  return (
    <Carousel variant="dark" className="mt-2 mb-1 ad-crousel">
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <Bounce left duration={2000}>
            <h5 className="caption-text">First slide label</h5>
            <br/>
            <p className="caption-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Bounce>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <Bounce left duration={2000}>
            <h5 className="caption-text">Second slide label</h5>
            <br/>
            <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Bounce>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <Bounce left duration={2000}>
            <h5 className="caption-text">Third slide label</h5>
            <br/>
            <p className="caption-text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Bounce>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AdCarousel;
