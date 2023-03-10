import cx from 'classnames';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { api } from './api';
import s from './style.module.scss';
import { PosterNav } from './PosterNav';

const PosterSwiper = () => {
  return (
    <div className={cx(s.posterSwiper)}>
      <Swiper
        className={cx(s.swiper)}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: `.${s.leftNav}`,
          nextEl: `.${s.rightNav}`,
        }}
        loop
      >
        {api.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <img alt="poster" className={s.poster} src={e.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <button className={cx(s.leftNav)}>dasdasd</button>
      <button className={cx(s.rightNav)}>dasdasd</button> */}
      <PosterNav type="left" className={cx(s.leftNav)} />
      <PosterNav type="right" className={cx(s.rightNav)} />
    </div>
  );
};

export { PosterSwiper };
