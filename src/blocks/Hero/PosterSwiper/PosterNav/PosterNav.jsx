import cx from 'classnames';

import rightArrow from '../../../../assets/svg/rightArrow.svg';

import s from './style.module.scss';

const PosterNav = (props) => {
  return (
    <button className={cx(props.className, s.posterNav)}>
      {props.type === 'left' && (
        <img className={cx(s.left)} alt="left" src={rightArrow} />
      )}
      <span>{props.type === 'left' ? 'ПРЕД' : 'СЛЕД'}</span>
      {props.type === 'right' && (
        <img className={cx(s.right)} alt="right" src={rightArrow} />
      )}
    </button>
  );
};

export { PosterNav };
