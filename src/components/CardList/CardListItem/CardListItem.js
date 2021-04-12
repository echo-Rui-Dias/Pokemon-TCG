import React from "react";
import styles from "./CardListItem.module.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import CardInfo from "../CardInfo/CardInfo";

export default function CardListItem({ card }) {
  return (
    <li className={styles.card}>
      <Route path='/Card-info' render={() => <CardInfo card={card} />} />
      <a className={styles["link-card"]} href='/Card-info'>
        {/*target='_blank'*/}
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
