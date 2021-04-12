import React from "react";
import PropTypes from "prop-types";
import CardListItem from "./CardListItem/CardListItem";
import styles from "./CardList.module.css";

function CardList({ cards }) {
  return cards.length > 0 ? (
    <ul className={styles["card-list"]}>
      {cards.map((card) => {
        return <CardListItem key={card.id} card={card} />;
      })}
    </ul>
  ) : (
    <div>
      <h2 className={styles["h2"]}>No Results</h2>
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.array,
};

export default CardList;
