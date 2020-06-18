import React, { Component } from 'react';
import DescriptionSlider from './DescriptionSlider';

export default class Description extends Component {
  render() {
    return (
      <div className="screen-container">
        <div className="description">
          <p className="description__title">Описание игры</p>
          <DescriptionSlider />
        </div>
      </div>
    );
  }
}
