import React, { useState, useContext, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import { getFollowers, getFollowing, getLikedVideos, getUserInfo, tiktokContext } from "../store.js";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VideoThumbnail from "react-video-thumbnail";

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
  }, [])

  const { followers, following, likedVideos, loggedInUserInfo } = store

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
  console.log('liked videos=====', likedVideos);
  //   console.log("video urls", loggedInUserInfo.videos);

  // this gets the total number of likes a user has received
  let totalLikes = 0;
  loggedInUserInfo.videos.forEach((video) => {
    totalLikes += video.likes.length;
  });

  return (
    <>
      {loggedInUserInfo && following && followers && (
        <div className={styles.profilePage}>
          <header className={styles.header}>
            <p>
              <PersonAddOutlinedIcon />
            </p>
            <p className={styles.username}>
              <span>{loggedInUserInfo.username}</span>
              <ArrowDropDownOutlinedIcon />
            </p>
            <p>
              <MoreVertOutlinedIcon />
            </p>
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
              <p>Following</p>
            </div>
            <div className={styles.followers}>
              <div className={styles.borderRight}></div>
              <p className={styles.number}>{followers.length}</p>
              <p>Followers</p>
            </div>
            <div className={styles.likes}>
              <p className={styles.number}>{totalLikes}</p>
              <p>Like</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.editProfile}>
              Edit profile
            </button>
            <button className={styles.bookmarks}>
              <BookmarkBorderOutlinedIcon />
            </button>
          </div>
          <ul className={styles.videos}>
            {userVideos ? (
              <li className={styles.activeList}><ViewColumnIcon onClick={handleUserVideosClick} /></li>
            ) : (
              <li><ViewColumnIcon onClick={handleUserVideosClick} /></li>
            )}
            {likeVideos ? (
              <li className={styles.activeList}><FavoriteBorderOutlinedIcon onClick={handleLikedVideosClick} /></li>
            ) : (
              <li><FavoriteBorderOutlinedIcon onClick={handleLikedVideosClick} /></li>
            )}
            {privateVideos ? (
              <li className={styles.activeList}><LockOutlinedIcon onClick={handlePrivateVideosClick} /></li>
            ) : (
              <li><LockOutlinedIcon onClick={handlePrivateVideosClick} /></li>
            )}
          </ul>
          {userVideos && (
            <div>
              {loggedInUserInfo.videos.map((video) => {
                return (
                  <video
                    key={video.id}
                    className={styles.thumbnail}
                    src={video.url}
                  ></video>
                );
              })}
            </div>
          )}
          {likeVideos && (
            <div>
              {likedVideos.map((video) => {
                return (
                  <video
                    key={video.id}
                    className={styles.thumbnail}
                    src={video.video.url}
                  ></video>
                );
              })}
            </div>
          )}

        </div>
      )}
    </>
  );
}
