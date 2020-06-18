import React, { Component } from 'react';
import Slider from 'react-leaf-carousel';
import screen1 from '../assets/img/screenshot1.png';
import screen2 from '../assets/img/screenshot2.jpg';
import screen3 from '../assets/img/screenshot3.jpg';
import screen4 from '../assets/img/screenshot4.jpg';
import screen5 from '../assets/img/screenshot5.jpg';
import screen6 from '../assets/img/screenshot6.jpg';

const SLIDES = [{
  name: 'screen1',
  imageSrc: screen1,
  alt: 'IT Roleplay screenshot 1',
}, {
  name: 'screen2',
  imageSrc: screen2,
  alt: 'IT Roleplay screenshot 2',
}, {
  name: 'screen3',
  imageSrc: screen3,
  alt: 'IT Roleplay screenshot 3',
}, {
  name: 'screen4',
  imageSrc: screen4,
  alt: 'IT Roleplay screenshot 4',
}, {
  name: 'screen5',
  imageSrc: screen5,
  alt: 'IT Roleplay screenshot 5',
}, {
  name: 'screen6',
  imageSrc: screen6,
  alt: 'IT Roleplay screenshot 6',
}];

export default class ScreenshotsSlider extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });

    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getSlides() {
    return SLIDES;
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  renderSlides() {
    return this.getSlides().map(({ alt, imageSrc, name }) => (
      <li className="screenshots-slider__item" key={name}>
        <img src={imageSrc} className="screenshots-slider__img" alt={alt} />
      </li>
    ));
  }

  renderSlider() {
    const { width } = this.state;
    let sideSize;
    let sidesOpacity;

    if (width >= 1200) {
      sideSize = 0.1;
      sidesOpacity = 0.5;
    } else {
      sideSize = 0;
      sidesOpacity = 1;
    }

    return (
      <Slider
        slidesSpacing={0}
        dots
        showSides
        sidesOpacity={sidesOpacity}
        sideSize={sideSize}
        slidesToScroll={1}
        slidesToShow={1}
        swipe
        scrollOnDevice={false}
      >
        {this.renderSlides()}
      </Slider>
    );
  }

  render() {
    return (
      <div className="screenshots-slider">
        {this.renderSlider()}
      </div>
    );
  }
}
