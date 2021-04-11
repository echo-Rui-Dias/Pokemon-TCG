import React from "react";
import Search from "./Search/Search";

export default function Nav({ setCards }) {
  return (
    <div>
      <img alt='teste' />
      <h1>Pokemon TCG APP</h1>
      <Search setCards={setCards} />
    </div>
  );
}
