import './AdCarousel.scss';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const AdCarousel = (props) => {
  return (
    <Carousel variant="dark" className="mt-2 mb-1 ad-crousel">
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="h-100 ad-crousel-item"
        style={{
          backgroundImage: `url("${'https://source.unsplash.com/1600x900/?ad'}")`,
        }}>
        <Carousel.Caption className="ad-crousel-item-caption">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AdCarousel;
