import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./VideoSidebar.module.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';

export default function VideoSidebar() {
  const { store, dispatch } = useContext(tiktokContext);

  return (
    <div className={styles.videoSideBar}>
      <div className={styles.videoSideBar__button}>
        <FavoriteIcon />
        <p>300</p>
      </div>
      <div className={styles.videoSideBar__button}>
        <CommentIcon />
        <p>300</p>
      </div>
      <div className={styles.videoSideBar__button}>
        <ShareIcon />
        <p>300</p>
      </div>
    </div>
  );
}
