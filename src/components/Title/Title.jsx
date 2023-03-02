import cx from 'classnames';

import s from './style.module.scss';

const Title = (props) => {
  const arr = props.children.split(' ');
  return (
    <h2 className={cx(s.title, props.className)}>
      <span className={cx(s.golden)}>{arr[0]} </span>
      {arr.slice(1, arr.length).join()}
    </h2>
  );
};

export { Title };
