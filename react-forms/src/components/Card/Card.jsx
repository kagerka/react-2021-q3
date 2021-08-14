import React from 'react';
import style from './Card.module.scss';

const Card = (formValues) => {
  return (
    <div className={style.cards_wrapper}>
      <div>
        <b>Name:</b> {formValues.item.firstName}
      </div>
      <div>
        <b>Surname:</b> {formValues.item.lastName}
      </div>
      <div>
        <b>Birth date:</b> {formValues.item.birthDate}
      </div>
      <div>
        <b>Country:</b> {formValues.item.country}
      </div>
      <div>
        <b>Subscriber:</b> {formValues.item.newsletter}
      </div>
    </div>
  );
};

export default Card;
