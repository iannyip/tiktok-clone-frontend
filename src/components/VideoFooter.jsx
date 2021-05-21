import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoFooter.module.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote"; // this is from material.ui
import Ticker from "react-ticker"; // this is from react-ticker library

const MoveStuffAround = () => (
  <Ticker>
    {({ index }) => (
      <>
        <h1>This is the Headline of element #{index}!</h1>
        <img src="www.my-image-source.com/" alt="" />
      </>
    )}
  </Ticker>
);

export default function VideoFooter() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div className={styles.videoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@iannyip</h3>
        <p>This is my description</p>
        <MusicNoteIcon />
        {/* <MoveStuffAround /> */}
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <p>Wow this is my song!</p>
            </>
          )}
        </Ticker>
      </div>
      <img
        className={styles.record}
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
}
