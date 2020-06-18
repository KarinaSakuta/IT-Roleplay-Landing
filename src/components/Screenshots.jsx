import React, { Component } from 'react';
import ScreenshotsSlider from './ScreenshotsSlider';

export default class Screenshots extends Component {
  render() {
    return (
      <div className="screen-container">
        <div className="screenshots">
          <p className="screenshots__title">Скриншоты</p>
          <ScreenshotsSlider />
        </div>
      </div>
    );
  }
}
