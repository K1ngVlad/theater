import cx from 'classnames';

import img from '../../../assets/svg/search.svg';

import s from './style.module.scss';

const ProjectSlide = (props) => {
  return (
    <div className={cx(s.projectSlide)}>
      <img alt="img" src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      {props.search && (
        <div className={cx(s.search)}>
          <img alt="search" src={img} />
        </div>
      )}
    </div>
  );
};

export { ProjectSlide };
