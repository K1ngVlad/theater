import cx from 'classnames';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { HeroLeft } from './HeroLeft';
import { PosterSwiper } from './PosterSwiper';

import s from './style.module.scss';

const Hero = (props) => {
  return (
    <section id="hero" className={cx(s.hero)}>
      <BurgerMenu popUp={props.popUp} setPopUp={props.setPopUp} />
      <div className={cx(s.container)}>
        <HeroLeft />
        <PosterSwiper />
      </div>
    </section>
  );
};

export { Hero };
