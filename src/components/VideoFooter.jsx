import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoFooter.module.css";

export default function VideoFooter() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div>
      <h1>TIKTOK FOOTER HERE</h1>
    </div>
  );
}
