import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";

export default function Video() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div>
      <h1>TIKTOK VIDEO HERE</h1>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}
