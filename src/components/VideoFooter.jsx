import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoFooter.module.css";

export default function VideoFooter() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div className={styles.videoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@iannyip</h3>
        <p>This is my description</p>
      </div>
      <img
        className={styles.record}
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
}
