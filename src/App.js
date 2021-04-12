import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList";
import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// import CardInfo from "./components/CardList/CardInfo/CardInfo";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Nav setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </BrowserRouter>
  );
}

export default App;
