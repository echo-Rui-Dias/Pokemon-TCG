import React from "react";
import PropTypes from "prop-types";

function CardList({ cards }) {
  return cards.length > 0 ? (
    <ul>
      {cards.forEach((card) => {
        <li>
          {console.log(card.name)}Name: {card.name}
        </li>;
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
