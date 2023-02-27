import cx from 'classnames';

import { api } from './api.js';

import s from './style.module.scss';

const RightBlock = () => {
  return (
    <div className={cx(s.rightBlock)}>
      <div>
        {api.map((e) => {
          return <img alt="star" key={e.id} src={e.img} />;
        })}
      </div>
      <p>{'Лучший театр \n по мнению театральных \n критиков Парижа'}</p>
    </div>
  );
};

export { RightBlock };
