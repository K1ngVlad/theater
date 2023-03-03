import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Title } from '../../components/Title';

import { api } from './api';

import s from './style.module.scss';

const partners = [];

for (let i = 0; i < api.length / 2; i++) {
  const arr = [];
  for (let j = 0; j < 2; j++) {
    arr.push(api[j + i * 2]);
  }
  partners.push(arr);
}

const Partners = () => {
  return (
    <section id="partners" className={cx(s.partners)}>
      <Title>партнеры театра</Title>
      <div className={cx(s.container)}>
        <Swiper
          loop
          spaceBetween={78}
          slidesPerView={'auto'}
          className={cx(s.swiper)}
        >
          {partners.map((e, i) => {
            return (
              <SwiperSlide className={cx(s.slide)} key={i}>
                {e.map((e) => {
                  return <img alt="partner" src={e.img} key={e.id} />;
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export { Partners };
