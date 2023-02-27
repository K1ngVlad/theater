import cx from 'classnames';
import { Title } from '../../components/Title';
import { ContactBox } from './ContactBox';
import { ContactForm } from './ContactForm';

import s from './style.module.scss';

const Contacts = () => {
  return (
    <section className={cx(s.contacts)}>
      <Title>стать меценатом</Title>
      <div className={cx(s.container)}>
        <ContactBox />
        <ContactForm />
      </div>
    </section>
  );
};

export { Contacts };
