import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import Rachel from '../assets/img/rachel.gif';

export default class DescriptionSlider extends Component {
  constructor() {
    super();

    this.state = {
      transform: 0,
      slidersCount: 2,
      currentDot: 0,
    };
  }

  handleSliderTransformLeft = () => {
    const { transform, currentDot } = this.state;
    if (transform >= 0) {
      return;
    }

    this.setState({transform: transform + 100, currentDot: currentDot - 1});
  }

  handleSliderTransformRight = () => {
    const { transform, currentDot, slidersCount } = this.state;
    const maxTransformValue = -((slidersCount * 100) - 100);
    if (transform === maxTransformValue) {
      return;
    }
    
    this.setState({transform: transform - 100, currentDot: currentDot + 1});
  }

  onSwipedSlide = (deltaX) => {
    if (deltaX.dir === "Right") {
      this.handleSliderTransformLeft();
    } else if (deltaX.dir === "Left") {
      this.handleSliderTransformRight();
    }
  }

  onDotClick = (dot) => {
    const transform = -(dot * 100);
    this.setState({transform: transform, currentDot: dot});
  }

  renderDots() {
    const {slidersCount, currentDot} = this.state;
    const dots = [];

    for (let i = 0; i < slidersCount; i++) {
      if (i === currentDot) {
        dots.push(<div className="description-slider__dots-element description-slider__dots-element_active"></div>);
      } else {
        dots.push(<div className="description-slider__dots-element" onClick={() => this.onDotClick(i)}></div>);
      }
    }

    return dots;
  }

  render() {
    const { transform } = this.state;

    return (
      <div className="description-slider">
        <Swipeable onSwiped={(deltaX) => this.onSwipedSlide(deltaX)} >
        <ul className="description-slider__container" style={{transform: `translateX(${transform}%)`}}>
          <li className="description-slider__item">
            <p className="description-slider__text">
              На данном этапе проект представляет собой демонстрацию ролевой системы в духе старых RPG, позволяет создать персонажа, повышать его уровень, прокачивать характеристики, навыки, технологии и перки. На странице списка присутствует краткое описание персонажей, при клике на персонажа открывается страница профиля.
            </p>
            <img src={Rachel} className="description-slider__img" alt="rachel" />
          </li>
          <li className="description-slider__item">
            <p className="description-slider__text">
              Достижения медицины и генной инженерии позволило создать искусственных людей - андроидов, названных репликантами. Репликант ничем не отличался от обычного человека, кроме своего происхождения, а в чем-то и превосходил его. 
            </p>
            <img src={Rachel} className="description-slider__img" alt="rachel" />
          </li>
        </ul>
        </Swipeable>
        <div className="description-slider__dots">
          {this.renderDots()}
        </div>
        <div className="description-slider__left-btn" onClick={this.handleSliderTransformLeft}>&#9668;</div>
        <div className="description-slider__right-btn" onClick={this.handleSliderTransformRight}>&#9658;</div>
      </div>
    )
  }
}
