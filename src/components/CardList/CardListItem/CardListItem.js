import React from "react";
import styles from "./CardListItem.module.css";
import PropTypes from "prop-types";
// import { Route } from "react-router-dom";
// import CardInfo from "../CardInfo/CardInfo";

export default function CardListItem({ card }) {
  // const pokemon = `https://api.pokemontcg.io/v2/cards/${card.id}`;
  return (
    <li className={styles.card}>
      {/* <CardInfo card={card} /> */}
      <a className={styles["link-card"]} href='/Card-info' target='_blank'>
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
