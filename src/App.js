import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className={styles.App}>
      <Nav setCards={setCards} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
