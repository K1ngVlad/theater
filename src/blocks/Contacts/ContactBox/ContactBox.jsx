import cx from 'classnames';

import { api } from './api';

import s from './style.module.scss';

const ContactBox = () => {
  return (
    <div className={cx(s.contactBox)}>
      <div>
        {api.map((e, i) => {
          return (
            i < 2 && (
              <a className={cx(s.link)} key={e.id} href={e.link}>
                {e.text}
              </a>
            )
          );
        })}
      </div>
      <div>
        {api.map((e, i) => {
          return (
            i >= 2 && (
              <a className={cx(s.link)} key={e.id} href={e.link}>
                {e.text}
              </a>
            )
          );
        })}
      </div>
    </div>
  );
};

export { ContactBox };
