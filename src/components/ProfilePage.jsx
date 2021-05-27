import React, { useState, useContext, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import { getUserInfo, tiktokContext } from "../store.js";
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

  //   useEffect(() => {
  //     getUserInfo(dispatch);
  //   }, []);

  const handleUserVideosClick = () => {};

  const { loggedInUserInfo } = store;
  console.log("user info========", loggedInUserInfo);
  //   console.log("video urls", loggedInUserInfo.videos);

  // this gets the total number of likes a user has received
  let totalLikes = 0;
  loggedInUserInfo.videos.forEach((video) => {
    totalLikes += video.likes.length;
  });

  return (
    <>
      {loggedInUserInfo ? (
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
              <p className={styles.number}>2</p>
              <p>Following</p>
            </div>
            <div className={styles.followers}>
              <div className={styles.borderRight}></div>
              <p className={styles.number}>2</p>
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
            <li>
              <ViewColumnIcon onClick={handleUserVideosClick} />
            </li>
            <li>
              <FavoriteBorderOutlinedIcon />
            </li>
            <li>
              <LockOutlinedIcon />
            </li>
          </ul>
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
        </div>
      ) : (
        <p className={styles.errormsg}>Error rendering user profile</p>
      )}
    </>
  );
}
