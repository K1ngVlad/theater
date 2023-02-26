import cx from 'classnames';

import chair from '../../../assets/svg/armchair.svg';
import theater from '../../../assets/svg/theater.svg';

import s from './style.module.scss';

const AboutNumber = () => {
  return (
    <div className={cx(s.aboutNumber)}>
      <h3 className={cx(s.title)}>Немного о цифрах</h3>
      <img alt="icon" src={chair} />
      <p>
        <span className={cx(s.gold)}>1600 </span>
        посадочных мест
      </p>
      <img alt="icon" src={theater} />
      <p>
        <span>350 </span>
        лет истории
      </p>
    </div>
  );
};

export { AboutNumber };
