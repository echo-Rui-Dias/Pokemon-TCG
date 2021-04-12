import React from "react";

import styles from "./CardInfo.module.css";

export default function CardInfo() {
  return (
    <div>
      <section className={styles["img-pokemon"]}>
        <img />
      </section>
      <section className={styles["info-pokemon"]}>
        <div className={styles["title-pokemon"]}>
          <h2></h2>
          <h4></h4>
        </div>
        <div className={styles["prices-pokemon"]}>
          <h3>Prices</h3>
          <h5></h5>
          <p></p>
          <ul>
            <li>
              <p></p>
              <h3></h3>
            </li>
            <li>
              <p></p>
              <h3></h3>
            </li>
            <li>
              <p></p>
              <h3></h3>
            </li>
            <li>
              <p></p>
              <h3></h3>
            </li>
          </ul>
        </div>
        <div className={styles["rules-pokemon"]}>
          <h6>Rules</h6>
        </div>
        <div className={styles["traits-pokemon"]}></div>
        <div className={styles["number-pokemon"]}></div>
      </section>
    </div>
  );
}
