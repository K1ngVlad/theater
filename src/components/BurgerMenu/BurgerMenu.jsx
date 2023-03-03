import cx from 'classnames';

import img from '../../assets/svg/close.svg';

import { links, icons } from './api';

import s from './style.module.scss';

const BurgerMenu = (props) => {
  const onClickHeandler = () => {
    props.setPopUp(false);
  };
  return (
    <div id="burger" className={cx(s.burgerMenu, props.popUp && s.active)}>
      <button onClick={onClickHeandler}>
        <img alt="close" src={img} />
      </button>
      <div className={cx(s.links)}>
        {links.map((e) => {
          return (
            <a onClick={onClickHeandler} key={e.name} href={e.link}>
              {e.name}
            </a>
          );
        })}
      </div>
      <div className={cx(s.icons)}>
        {icons.map((e) => {
          return (
            <a key={e.name} href={e.link}>
              <img alt={e.name} src={e.img} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export { BurgerMenu };
