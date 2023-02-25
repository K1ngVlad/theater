import cx from 'classnames';

import s from './style.module.scss';

const Icon = (props) => {
  return (
    <a href={props.link} className={cx(s.icon)}>
      <img alt={props.name} src={props.img} />
    </a>
  );
};

export { Icon };
