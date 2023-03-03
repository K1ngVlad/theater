import cx from 'classnames';

import { api } from './api';
import { NavLink } from './NavLink';

import img from '../../assets/svg/bx-menu.svg';

import s from './style.module.scss';

const Header = (props) => {
  const onClickHeandler = () => {
    props.setPopUp(true);
  };
  return (
    <header className={cx(s.header)}>
      <nav className={cx(s.nav)}>
        {api.map((e) => {
          return (
            <NavLink key={e.name} link={e.link}>
              {e.name}
            </NavLink>
          );
        })}
      </nav>
      <button onClick={onClickHeandler} className={cx(s.burgerBtn)}>
        <img alt="nav" src={img} />
      </button>
      <a className={cx(s.phone)} href="./">
        +7 495 123-45-67
      </a>
    </header>
  );
};

export { Header };
