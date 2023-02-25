import cx from 'classnames';

import s from './style.module.scss';

const NavLink = (props) => {
  return (
    <a className={cx(s.navLink)} href={props.link}>
      {props.children}
    </a>
  );
};

export { NavLink };
