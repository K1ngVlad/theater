import cx from 'classnames';
import { Title } from '../../components/Title';

import s from './style.module.scss';

const Projects = () => {
  return (
    <section className={cx(s.projects)}>
      <Title>наши постановки</Title>
      <div className={cx(s.container)}></div>
    </section>
  );
};

export { Projects };
