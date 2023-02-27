import cx from 'classnames';

import s from './style.module.scss';

const RatingDates = () => {
  return (
    <div className={cx(s.ratingDates)}>
      <span>2018</span>
      <span>2019</span>
      <span>2020</span>
    </div>
  );
};

export { RatingDates };
