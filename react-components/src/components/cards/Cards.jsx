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
            country={card.country}
            year={card.year}
            like={card.like}
            view={card.view}
          />
        );
      })}
    </div>
  );
}

export default Cards;
