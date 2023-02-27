import cx from 'classnames';

import s from './style.module.scss';

const Footer = () => {
  return (
    <footer className={cx(s.footer)}>
      <div>
        <p>{'(с) Все права защищены. Большой театр. 2020'}</p>
        <p>Разработано d-e-n.ru</p>
      </div>
    </footer>
  );
};

export { Footer };
