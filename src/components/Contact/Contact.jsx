import cx from 'classnames';

import s from './style.module.scss';

import { api } from './api';
import { Icon } from './Icon';

const Contact = () => {
  return (
    <aside className={cx(s.contact)}>
      <h2 className={cx(s.title)}>Контактная информация</h2>
      <div className={cx(s.links)}>
        {api.map((e) => {
          return <Icon key={e.name} name={e.name} link={e.link} img={e.img} />;
        })}
      </div>
    </aside>
  );
};

export { Contact };
