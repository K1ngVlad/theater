import cx from 'classnames';

import s from './style.module.scss';

const Input = (props) => {
  const type = props.type || 'input';
  if (type === 'input') {
    return (
      <input
        name={props.name}
        placeholder={props.children}
        className={cx(s.input, props.className)}
      />
    );
  }
  if (type === 'area') {
    return (
      <textarea
        name={props.name}
        placeholder={props.children}
        className={cx(s.input, props.className)}
      />
    );
  }
};

export { Input };
