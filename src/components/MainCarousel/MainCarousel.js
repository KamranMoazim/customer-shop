import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MainCarousel.css';


import hero from '../../static/hero.jpg';
import img1 from '../../static/1440 536 new 1.jpg';
// import img2 from '../../static/1440 536 new 2.jpg';
import img3 from '../../static/1440 536 new 3.jpg';
// import img4 from '../../static/1440 536 new 4.jpg';
// import img5 from '../../static/1440 536 new 5.jpg';
import img6 from '../../static/1440 536 new 6.jpg';
// import img7 from '../../static/1440 536 new 7.jpg';
import img8 from '../../static/1440 536 new 8.jpg';
import img9 from '../../static/1440 536 new 9.jpg';
import img10 from '../../static/1440 536 new 10.jpg';
import img11 from '../../static/1440 536 new 11.jpg';
import img12 from '../../static/1440 536 new 12.jpg';
import img13 from '../../static/1440 536 new 13.jpg';
import img14 from '../../static/1440 536 new 14.jpg';
import img15 from '../../static/1440 536 new 15.jpg';
import img16 from '../../static/1440 536 new 16.jpg';
// import SecondSlide from '../../static/SecondSlide.jpg';
// import ThirdSlide from '../../static/ThirdSlide.jpg';

class MainCarousel extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='outer-mc'>
          {/* Hero Image Start */}
          <div className='row'>
            <div className='col-sm-12'>
              <div className='hero-img-mc'>
                <img src={hero} alt='Hero' />
                <div className='inner-text-hero'>
                  <div className='title-hero-mc'>Iqra Steel Works</div>
                  <div className='para-hero-mc'>
                      Everything is designed. Few things are designed well.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image End */}

          <Carousel>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img1}
                alt='Third slide'
              />
              <Carousel.Caption>
                <h3>Iqra Steel Works</h3>
                <p>
                  The question of what you want to own is actually the question of how you want to live your life.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img2}
                alt='Third slide'
              />
            </Carousel.Item> */}

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img3}
                alt='Third slide'
              />
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img4}
                alt='Third slide'
              />
            </Carousel.Item> */}

            {/* <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img5}
                alt='Third slide'
              />
            </Carousel.Item> */}

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img6}
                alt='Third slide'
              />
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img7}
                alt='Third slide'
              />
            </Carousel.Item> */}

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img8}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img9}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img10}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img11}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img12}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img13}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img14}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img15}
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img-mc'
                src={img16}
                alt='Third slide'
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}

export default MainCarousel;