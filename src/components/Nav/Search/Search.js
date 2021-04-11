import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function Search({ setCards }) {
  useEffect(() => {
    const getInititalCards = async () => {
      try {
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v2/cards?pageSize=50"
        );
        setCards(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInititalCards();
  }, []);
  return <input />;
}

Search.protoTypes = {
  setCards: PropTypes.func,
};
