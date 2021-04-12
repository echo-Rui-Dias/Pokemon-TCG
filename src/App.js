import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Nav setCards={setCards} />
        {/* <Route path='/Card-List' render={() => <CardList cards={cards} />} /> */}
        <CardList cards={cards} />
      </div>
    </BrowserRouter>
  );
}

export default App;
