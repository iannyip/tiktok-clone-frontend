import React, { useContext } from "react";
import Video from "./Video.jsx";
import { tiktokContext } from "../store.js";
import styles from "./Home.module.css";

export default function Home() {
  const { state, dispatch } = useContext(tiktokContext);
  return (
    <div className={styles.homeVideos}>
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
