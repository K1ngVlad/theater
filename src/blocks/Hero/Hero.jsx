import cx from 'classnames';
import { HeroLeft } from './HeroLeft';
import { PosterSwiper } from './PosterSwiper';

import s from './style.module.scss';

const Hero = () => {
  return (
    <section className={cx(s.hero)}>
      <div className={cx(s.container)}>
        <HeroLeft />
        <PosterSwiper />
      </div>
    </section>
  );
};

export { Hero };
