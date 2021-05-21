import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoSidebar.module.css";

export default function VideoSidebar() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div>
      <h1>TIKTOK SIDEBAR HERE</h1>
    </div>
  );
}
