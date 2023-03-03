import cx from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Title } from '../../components/Title';

import { api } from './api';

import s from './style.module.scss';
import { ProjectSlide } from './ProjectSlide';

const Projects = () => {
  return (
    <section id="projects" className={cx(s.projects)}>
      <Title>наши постановки</Title>
      <div className={cx(s.container)}>
        <Swiper
          slidesPerView={'auto'}
          loop
          freeMode={
            {
              // enabled: true,
              // freeModeMomentumRatio: 5,
              // momentum: true,
              // momentumBounce: true,
              // momentumRatio: 3,
            }
          }
          className={s.swiper}
        >
          {api.map((e) => {
            return (
              <SwiperSlide key={e.id} className={s.slide}>
                <ProjectSlide
                  img={e.img}
                  date={e.date}
                  name={e.name}
                  search={e.search}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export { Projects };
