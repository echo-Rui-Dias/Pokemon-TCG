import React from "react";
import styles from "./CardInfo.module.css";

export default function CardInfo({ card }) {
  //   const checkPrices = (existence) => {
  //     if (existence) {
  //       return true;
  //     }
  //     return false;
  //   };
  return (
    <div>
      <section className={styles["img-pokemon"]}>
        <img src={card.images.small} alt={"image of " + card.name} />
      </section>
      <section className={styles["info-pokemon"]}>
        <div className={styles["title-pokemon"]}>
          <h2>{card.name}</h2>
          <h4>
            {card.supertype} - {card.subtypes}
          </h4>
        </div>
        <div className={styles["prices-pokemon"]}>
          <h3>Prices</h3>
          <h5>
            <a href={card.tcgplayer ? card.tcgplayer.url : "#"}>
              Buy Now From TCGplayer
            </a>
          </h5>
          <p>
            Last Updated{" "}
            {card.tcgplayer ? card.tcgplayer.updatedAt : "No Recent Update"}
          </p>
          <ul>
            <li>
              <p>NORMAL MARKET</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.normal.low : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>NORMAL LOW</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.normal.low : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>NORMAL MID</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.normal.mid : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>NORMAL HIGH</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.normal.high : "N/A"} */}
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <p>REVERSE HOLOFOIL MARKET</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.reverseHolofoil.low : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>REVERSE HOLOFOIL LOW</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.reverseHolofoil.low : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>REVERSE HOLOFOIL MID</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.reverseHolofoil.low : "N/A"} */}
              </h3>
            </li>
            <li>
              <p>REVERSE HOLOFOIL HIGH</p>
              <h3>
                {/* {card.tcgplayer ? card.tcgplayer.prices.reverseHolofoil.low : "N/A"} */}
              </h3>
            </li>
          </ul>
        </div>
        <div className={styles["rules-pokemon"]}>
          <h6>Rules</h6>
          <p>{card.rules}</p>
        </div>
        <div className={styles["traits-pokemon"]}>
          <ul>
            <li>
              <p>WEAKNESS</p>
              <h3></h3>
            </li>
            <li>
              <p>RESISTANCE</p>
              <h3></h3>
            </li>
            <li>
              <p>RETREAT COST</p>
              <h3></h3>
            </li>
          </ul>
          <ul>
            <li>
              <p>ARTIST</p>
              <h3></h3>
            </li>
            <li>
              <p>RARITY</p>
              <h3></h3>
            </li>
            <li>
              <p>SET</p>
              <h3></h3>
            </li>
          </ul>
        </div>
        <div className={styles["number-pokemon"]}>
          <div>
            <p>NUMBER</p>
            <h3>
              {card.number}/{card.set.total}
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
