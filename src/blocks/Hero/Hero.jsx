import cx from 'classnames';
import { HeroLeft } from './HeroLeft';

import s from './style.module.scss';

const Hero = () => {
  return (
    <section className={cx(s.hero)}>
      <div className={cx(s.container)}>
        <HeroLeft />
      </div>
    </section>
  );
};

export { Hero };
