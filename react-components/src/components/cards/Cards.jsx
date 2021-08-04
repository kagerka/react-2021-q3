import React from 'react';
import styles from './Cards.module.scss';
import Card from './card/Card';
import cardsData from './cardsData.json';

function Cards() {
  return (
    <div className={styles.cards_wrapper}>
      {cardsData.cards.map((card) => {
        return (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            year={card.year}
          />
        );
      })}
    </div>
  );
}

export default Cards;
