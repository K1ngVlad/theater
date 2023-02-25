import { Button } from '../../../components/Button';

import cx from 'classnames';

import s from './style.module.scss';

const HeroLeft = () => {
  return (
    <div className={cx(s.heroLeft)}>
      <h1 className={cx(s.title)}>БОЛЬШОЙ ТЕАТР</h1>
      <p className={cx(s.text)}>
        Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с
        1886 года — Петербургская консерватория. Первое постоянное в
        Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных
        зданий в Европе XVIII.
      </p>
      <Button>АФИША</Button>
    </div>
  );
};

export { HeroLeft };
