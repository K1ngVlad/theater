import cx from 'classnames';

import { Title } from '../../components/Title';
import { AboutNumber } from './AboutNumber';
import { AboutText } from './AboutText';

import img from '../../assets/img/theater_photo.png';

import s from './style.module.scss';

const About = () => {
  return (
    <section id="about" className={cx(s.about)}>
      <Title className={cx(s.title)}>О ТЕАТРЕ</Title>
      <div className={cx(s.container)}>
        <AboutText />
        <AboutNumber />
        <img alt="theater" src={img} className={cx(s.img)} />
      </div>
    </section>
  );
};

export { About };
