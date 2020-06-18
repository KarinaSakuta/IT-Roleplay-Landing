import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import Rachel from '../assets/img/rachel.gif';

const SLIDERS_COUNT = 2;

export default class DescriptionSlider extends Component {
  constructor() {
    super();

    this.state = {
      transform: 0,
      currentDot: 0,
    };
  }

  handleSliderTransformLeft = () => {
    const { transform, currentDot } = this.state;
    if (transform >= 0) {
      return;
    }

    this.setState({ transform: transform + 100, currentDot: currentDot - 1 });
  }

  handleSliderTransformRight = () => {
    const { transform, currentDot } = this.state;
    const maxTransformValue = -((SLIDERS_COUNT * 100) - 100);
    if (transform === maxTransformValue) {
      return;
    }

    this.setState({ transform: transform - 100, currentDot: currentDot + 1 });
  }

  onDotClick = (dot) => {
    const transform = -(dot * 100);
    this.setState({ transform, currentDot: dot });
  }

  renderDots() {
    const { currentDot } = this.state;
    const dots = [];

    for (let i = 0; i < SLIDERS_COUNT; i++) {
      if (i === currentDot) {
        dots.push(<div className="description-slider__dots-element description-slider__dots-element_active" />);
      } else {
        dots.push(<div className="description-slider__dots-element" aria-label="dot" role="button" onClick={() => this.onDotClick(i)} />);
      }
    }

    return dots;
  }

  renderSliderItems() {
    return (
      <>
        <li className="description-slider__item">
          <p className="description-slider__text">
            На данном этапе проект представляет собой демонстрацию ролевой системы
            в духе старых RPG, позволяет создать персонажа, повышать его уровень,
            прокачивать характеристики, навыки,технологии и перки.
            На странице списка присутствует краткое описание персонажей,
            при клике на персонажа открывается страница профиля.
          </p>
          <img src={Rachel} className="description-slider__img" alt="rachel" />
        </li>
        <li className="description-slider__item">
          <p className="description-slider__text">
            Достижения медицины и генной инженерии позволило создать искусственных
            людей - андроидов, названных репликантами. Репликант ничем не
            отличался от обычного человека, кроме своего происхождения,
            а в чем-то и превосходил его.
          </p>
          <img src={Rachel} className="description-slider__img" alt="rachel" />
        </li>
      </>
    );
  }

  render() {
    const { transform } = this.state;

    return (
      <div className="description-slider">
        <Swipeable onSwipedLeft={this.handleSliderTransformRight} onSwipedRight={this.handleSliderTransformLeft}>
          <ul className="description-slider__container" style={{ transform: `translateX(${transform}%)` }}>
            {this.renderSliderItems()}
          </ul>
        </Swipeable>
        <div className="description-slider__dots">
          {this.renderDots()}
        </div>
        <div className="description-slider__left-btn" aria-label="prev-slider" role="button" onClick={this.handleSliderTransformLeft}>&#9668;</div>
        <div className="description-slider__right-btn" aria-label="next-slider" role="button" onClick={this.handleSliderTransformRight}>&#9658;</div>
      </div>
    );
  }
}
