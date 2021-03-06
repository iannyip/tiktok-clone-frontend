import React, { useState, useContext, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import {
  getFollowers,
  getFollowing,
  getLikedVideos,
  getFollowerFollowing,
  getUserInfo,
  tiktokContext,
} from "../store.js";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VideoThumbnail from "react-video-thumbnail";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { store, dispatch } = useContext(tiktokContext);
  const [userVideos, setUserVideos] = useState(true);
  const [likeVideos, setLikeVideos] = useState(false);
  const [privateVideos, setPrivateVideos] = useState(false);

  //   useEffect(() => {
  //     getUserInfo(dispatch);
  //   }, []);
  useEffect(() => {
    getFollowers(dispatch);
    getFollowing(dispatch);
    getLikedVideos(dispatch);
  }, []);

  const { followers, following, likedVideos, loggedInUserInfo } = store;

  const handleFollowingClick = () => {
    console.log("inside handle following click");
    getFollowerFollowing(dispatch, "following");
  };

  const handleFollowersClick = () => {
    getFollowerFollowing(dispatch, "followers");
  };

  const handleUserVideosClick = () => {
    setUserVideos(true);
    setLikeVideos(false);
    setPrivateVideos(false);
  };

  const handleLikedVideosClick = () => {
    setUserVideos(false);
    setLikeVideos(true);
    setPrivateVideos(false);
  };

  const handlePrivateVideosClick = () => {
    setUserVideos(false);
    setLikeVideos(false);
    setPrivateVideos(true);
  };

  console.log("user info========", loggedInUserInfo);
  console.log("liked videos=====", likedVideos);
  //   console.log("video urls", loggedInUserInfo.videos);

  // this gets the total number of likes a user has received
  let totalLikes = 0;
  if (loggedInUserInfo.videos) {
    loggedInUserInfo.videos.forEach((video) => {
      totalLikes += video.likes.length;
    });
  }

  return (
    <>
      {loggedInUserInfo && following && followers && (
        <div className={styles.profilePage}>
          <header className={styles.header}>
            <p>{/* <PersonAddOutlinedIcon /> */}</p>
            <p className={styles.username}>
              <span>{loggedInUserInfo.username}</span>
              {/* <ArrowDropDownOutlinedIcon /> */}
            </p>
            <p>{/* <MoreVertOutlinedIcon /> */}</p>
          </header>

          <div className={styles.picSection}>
            <img
              src={loggedInUserInfo.profilePic}
              className={styles.profilePic}
              alt="..."
            />
            <p>@{loggedInUserInfo.username}</p>
          </div>
          <div className={styles.stats}>
            <div className={styles.following}>
              <div className={styles.borderRight}></div>
              <p className={styles.number}>{following.length}</p>
              <Link to="/follow">
                <p onClick={handleFollowingClick}>Following</p>
              </Link>
            </div>
            <div className={styles.followers}>
              <div className={styles.borderRight}></div>
              <p className={styles.number}>{followers.length}</p>
              <Link to="follow">
                <p onClick={handleFollowersClick}>Followers</p>
              </Link>
            </div>
            <div className={styles.likes}>
              <p className={styles.number}>{totalLikes}</p>
              <p>Likes</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.editProfile}>
              <Link to="/edit">
                Edit profile
              </Link>
            </button>
            {/* <button className={styles.bookmarks}>
              <BookmarkBorderOutlinedIcon />
            </button> */}
          </div>
          <ul className={styles.videos}>
            {userVideos ? (
              <li className={styles.activeList}>
                <ViewColumnIcon onClick={handleUserVideosClick} />
              </li>
            ) : (
              <li>
                <ViewColumnIcon onClick={handleUserVideosClick} />
              </li>
            )}
            {likeVideos ? (
              <li className={styles.activeList}>
                <FavoriteBorderOutlinedIcon onClick={handleLikedVideosClick} />
              </li>
            ) : (
              <li>
                <FavoriteBorderOutlinedIcon onClick={handleLikedVideosClick} />
              </li>
            )}
            {/* {privateVideos ? (
              <li className={styles.activeList}>
                <LockOutlinedIcon onClick={handlePrivateVideosClick} />
              </li>
            ) : (
              <li>
                <LockOutlinedIcon onClick={handlePrivateVideosClick} />
              </li>
            )} */}
          </ul>
          {userVideos && (
            <div className={styles.videoContainer}>
              {loggedInUserInfo.videos.map((video) => {
                return (
                  <div className={styles.thumbnail}>
                    <div className={styles.videoInfo}>
                      <FavoriteIcon fontSize="small" />
                      {video.likes.length}
                    </div>
                    <video
                      key={video.id}
                      className={styles.thumbnailVideo}
                      src={video.url}
                    ></video>
                  </div>
                );
              })}
            </div>
          )}
          {likeVideos && (
            <div className={styles.videoContainer}>
              {likedVideos.map((video) => {
                return (
                  <div className={styles.thumbnail}>
                    <div className={styles.videoInfo}>
                      <FavoriteIcon fontSize="small" />
                      {/* {video.likes.length} */}
                    </div>
                    <video
                      key={video.id}
                      className={styles.thumbnailVideo}
                      src={video.video.url}
                    ></video>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
