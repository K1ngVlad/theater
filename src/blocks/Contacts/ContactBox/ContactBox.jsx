import cx from 'classnames';

import { api } from './api';

import s from './style.module.scss';

const ContactBox = () => {
  return (
    <div className={cx(s.contactBox)}>
      {api.map((e) => {
        return (
          <a className={cx(s.link)} key={e.id} href={e.link}>
            {e.text}
          </a>
        );
      })}
    </div>
  );
};

export { ContactBox };
