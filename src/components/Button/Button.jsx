import cx from 'classnames';

import s from './style.module.scss';

const Button = (props) => {
  return <button className={cx(s.button)}>{props.children}</button>;
};

export { Button };
