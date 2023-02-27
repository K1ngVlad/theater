import cx from 'classnames';

import { Button } from '../../../components/Button';
import { Input } from './Input';

import { api } from './api';

import s from './style.module.scss';

const ContactForm = () => {
  return (
    <form className={cx(s.contactForm)}>
      <div className={cx(s.inputs)}>
        {api.map((e) => {
          return (
            <Input
              key={e.name}
              type={e.type}
              name={e.name}
              className={s[e.name]}
            >
              {e.text}
            </Input>
          );
        })}
      </div>
      <div className={cx(s.botForm)}>
        <p className={cx(s.formText)}>
          {`
           * Ваши данные не будут переданы третьим лицам, 100%
            вероятность. Конфиденциальность мы гарантируем, и защищаем
             персональные данные согласно законку ФЗ-52.`}
        </p>
        <Button>Отправить</Button>
      </div>
    </form>
  );
};

export { ContactForm };
