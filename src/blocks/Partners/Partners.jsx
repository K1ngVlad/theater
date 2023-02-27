import cx from 'classnames';

import { Title } from '../../components/Title';

import { api } from './api';

import s from './style.module.scss';

const Partners = () => {
  return (
    <section className={cx(s.partners)}>
      <Title>партнеры театра</Title>
      <div className={cx(s.container)}>
        {api.map((e) => {
          return <img alt="partner" key={e.id} src={e.img} />;
        })}
      </div>
    </section>
  );
};

export { Partners };
