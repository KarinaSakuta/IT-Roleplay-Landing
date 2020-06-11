import React, { Component } from 'react';
import classNames from 'classnames';

export default class MobileMenu extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  handleBurgerClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const btnClass = classNames('mobile-menu__btn', {
      'mobile-menu__btn_pressed': isOpen,
    });

    const boxClass = classNames('mobile-menu__box', {
      'mobile-menu__box_pressed': isOpen,
    });

    return (
      <div className="mobile-menu">
        <div className={btnClass} role="button" onClick={this.handleBurgerClick}>
          <span className="mobile-menu__btn-element" />
        </div>
        <nav className={boxClass}>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">Промо</li>
            <li className="mobile-menu__item">Описание</li>
            <li className="mobile-menu__item">Скриншоты</li>
            <li className="mobile-menu__item">Классы</li>
            <li className="mobile-menu__item">Контакты</li>
          </ul>
        </nav>
      </div>
    );
  }
}
