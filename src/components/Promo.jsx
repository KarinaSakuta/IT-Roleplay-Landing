import React, { Component } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import imgSrc from '../assets/img/sun.png';

export default class PromoScreen extends Component {
  render() {
    return (
      <div className="screen-container screen-container_promo">
        <div className="promo">
          <Menu />
          <MobileMenu />
          <div className="promo__gif">
            <img src={imgSrc} className="promo__sun" alt="sun" />
            <p className="promo__title">It roleplay</p>
            <p className="promo__text">Ролевая игра в духе старых RPG</p>
            <a href="https://it-roleplay.herokuapp.com/" rel="noreferrer" target="_blank" className="promo__button">Играть</a>
          </div>
        </div>
      </div>
    );
  }
}
