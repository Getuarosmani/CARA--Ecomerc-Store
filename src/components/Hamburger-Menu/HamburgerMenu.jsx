import React from "react";
import { useId } from "react";
import styles from "./HamburgerMenu.module.scss";

export const HamburgerMenu = ({togleMenu, isOpen}) => {
  const id = useId();

  return (
    <div className={styles.menuBtnContainer}>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={togleMenu}
        id={id}
        className={styles.checkbox} />
      <label htmlFor={id} className={styles.menuLabel}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </label>
    </div>
  );
};
