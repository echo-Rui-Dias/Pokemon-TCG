import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./Search.module.css";

export default function Search({ setCards }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setCards([]);
    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v2/cards?orderBy=name&pageSize=50&q=name:${searchTerm}*`
      );
      setCards(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getInititalCards = async () => {
      try {
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v2/cards?orderBy=name&pageSize=50"
        );
        setCards(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInititalCards();
  }, []);
  return (
    <form className={styles["form-search"]} onSubmit={handleOnSubmit}>
      <div>
        <input
          className={styles.input}
          type='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles["btn-search"]} type='submit'>
          Search
        </button>
      </div>
    </form>
  );
}

Search.protoTypes = {
  setCards: PropTypes.func,
};
