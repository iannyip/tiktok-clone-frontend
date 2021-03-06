import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoFooter.module.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote"; // this is from material.ui
import Ticker from "react-ticker"; // this is from react-ticker library

export default function VideoFooter({ videoObj }) {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div className={styles.videoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@{videoObj.username}</h3>
        <p>{videoObj.description}</p>
        <div className={styles.musicTicker}>
          <MusicNoteIcon className={styles.musicTickericon} />
          <div className={styles.musicTickerContainer}>
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className={styles.musicTickerText}>{videoObj.song}</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
      </div>
      <img
        className={styles.record}
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="..."
      ></img>
    </div>
  );
}
