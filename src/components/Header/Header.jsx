import cx from 'classnames';

import s from './style.module.scss';

import { api } from './api';
import { NavLink } from './NavLink';

const Header = () => {
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
      <a className={cx(s.phone)} href="./">
        +7 495 123-45-67
      </a>
    </header>
  );
};

export { Header };
