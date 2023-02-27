import cx from 'classnames';
import { RatingDates } from './RatingDates/RatingDates';
import { RightBlock } from './RatingDates/RightBlock';

import s from './style.module.scss';

const Rating = () => {
  return (
    <section className={cx(s.rating)}>
      <div className={cx(s.container)}>
        <div className={cx(s.box)}>
          <RatingDates />
          <RightBlock />
        </div>
      </div>
    </section>
  );
};

export { Rating };
