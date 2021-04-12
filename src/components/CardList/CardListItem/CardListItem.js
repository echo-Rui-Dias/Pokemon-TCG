import React from "react";
import styles from "./CardListItem.module.css";
import PropTypes from "prop-types";

export default function CardListItem({ card }) {
  const pokemon = `https://api.pokemontcg.io/v2/cards/${card.id}`;
  return (
    <li className={styles.card}>
      <a className={styles["link-card"]} href={pokemon} target='_blank'>
        <img
          className={styles["img-card"]}
          src={card.images.small}
          alt={card.name}
        />
      </a>
    </li>
  );
}

CardListItem.propTypes = {
  card: PropTypes.object,
};
