import React, { useState, useContext, useEffect } from "react";
import { changeNumOfLikes, loadLikes, tiktokContext } from "../store.js";
import styles from "./VideoSidebar.module.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import axios from "axios";
import cookieParser from 'cookie-parser';
import {
  addLike,
  subtractLike,
} from '../store';


// like function works, need to set up route to display 
// all videos so we can get rid of the hard coded video id

export default function VideoSidebar() {
  const { store, dispatch } = useContext(tiktokContext);
  const [liked, setLiked] = useState(false);
  let { likes } = store;

  useEffect(() => {
    loadLikes(dispatch);
  }, [])

  const handleLikeClick = () => {
    console.log('likes +++++++', likes);
    setLiked(true);
    likes = likes + 1;
    console.log('updated likes', likes);
    addLike(dispatch, likes);
  }

  const handleUnlikeClick = () => {
    setLiked(false);
    likes = likes - 1
    subtractLike(dispatch, likes);
  }

  // TODO: image src need to be changed , hardcoded for now
  return (
    <div className={styles.videoSideBar}>
      <img src="https://image.shutterstock.com/image-photo/self-portrait-beautiful-chinese-girl-260nw-1289866381.jpg" className={styles.rounded} />
      <div className={styles.videoSideBar__button}>
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={handleUnlikeClick} />
        ) : (
          <FavoriteBorderOutlinedIcon fontSize="large" onClick={handleLikeClick} />
        )}
        <p>{likes}</p>
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
