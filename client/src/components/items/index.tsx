import React from "react";
import styles from "./Items.module.scss";
import { Item } from "@/api/types/items.types";

interface IProps {
  items: Item[];
}

const Items: React.FC<IProps> = ({ items }) => {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item, index) => (<div key={index} className={styles.itemWrapper}>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className={styles.itemDescription}>{item.description}</div>
      </div>))}
    </div>
  );
};

export default Items;
