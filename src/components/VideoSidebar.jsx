import React, { useState, useContext, useEffect } from "react";
import { changeNumOfLikes, loadLikes, tiktokContext } from "../store.js";
import styles from "./VideoSidebar.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import { addLike, subtractLike } from "../store";
import { useHistory } from "react-router-dom";

// like function works, need to set up route to display
// all videos so we can get rid of the hard coded video id

export default function VideoSidebar({ videoObj }) {
  const { store, dispatch } = useContext(tiktokContext);
  const [liked, setLiked] = useState(videoObj.userliked);
  const [likesCount, setLikesCount] = useState(videoObj.likes);
  let history = useHistory();

  const { isUserLoggedIn, loggedInUserId } = store;

  const handleLikeClick = () => {
    if (isUserLoggedIn && !videoObj.userliked) {
      console.log("the user has not liked it before");
      setLiked(true);
      setLikesCount(likesCount + 1);
      addLike(dispatch, videoObj.videoId, loggedInUserId);
    } else {
      history.push("/me");
    }
  };

  const handleUnlikeClick = () => {
    setLiked(false);
    setLikesCount(likesCount - 1);
    subtractLike(dispatch, videoObj.videoId, loggedInUserId);
  };

  return (
    <div className={styles.videoSideBar}>
      <img src={videoObj.userprofileurl} className={styles.rounded} alt="..." />
      <div className={styles.videoSideBar__button}>
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={handleUnlikeClick} />
        ) : (
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            onClick={handleLikeClick}
          />
        )}
        <p>{likesCount}</p>
      </div>
      {/* <div className={styles.videoSideBar__button}>
        <CommentIcon />
        <p>{videoObj.comments}</p>
      </div> */}
      <div className={styles.videoSideBar__button}>
        <ShareIcon />
        {/* <p>{videoObj.shares}</p> */}
      </div>
    </div>
  );
}
