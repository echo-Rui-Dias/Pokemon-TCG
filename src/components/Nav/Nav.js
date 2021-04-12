import React from "react";
import Search from "./Search/Search";
import styles from "./Nav.module.css";

export default function Nav({ setCards }) {
  return (
    <div className={styles.Nav}>
      <a className={styles["link-nav"]} href='../../App.js'>
        <img className={styles["img-logo"]} src='images/logo.png' alt='teste' />
        <h1 className={styles["title"]}>Pokemon TCG APP</h1>
      </a>
      <Search setCards={setCards} />
    </div>
  );
}
