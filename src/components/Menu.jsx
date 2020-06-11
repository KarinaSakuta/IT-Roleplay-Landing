import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="menu__container">
          <ul className="menu__list">
            <li className="menu__element">Промо</li>
            <li className="menu__element">Описание</li>
            <li className="menu__element">Скриншоты</li>
            <li className="menu__element">Классы</li>
            <li className="menu__element">Контакты</li>
          </ul>
        </nav>
      </div>
    );
  }
}
