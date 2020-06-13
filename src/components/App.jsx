import React, { Component } from 'react';
import Favicon from 'react-favicon';
import Promo from './Promo';
import logoIcon from '../assets/img/sun.png';

export default class App extends Component {
  renderIcon() {
    return (
      <div>
        <Favicon url={logoIcon} />
      </div>
    );
  }

  render() {
    return (
      <>
        {this.renderIcon()}
        <div className="app">
          <Promo />
        </div>
      </>
    );
  }
}
