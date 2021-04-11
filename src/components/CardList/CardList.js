import React from "react";
import PropTypes from "prop-types";
import CardListItem from "./CardListItem/CardListItem";

function CardList({ cards }) {
  return cards.length > 0 ? (
    <ul>
      {cards.map((card) => {
        <li>
          {console.log(card.name)}Name: {card.name}
        </li>;
        // <CardListItem card={card} />;
      })}
    </ul>
  ) : (
    <div>
      <h2>No Results</h2>
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.array,
};

export default CardList;
