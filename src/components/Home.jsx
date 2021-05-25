import React, { useContext, useEffect } from "react";
import Video from "./Video.jsx";
import { tiktokContext, getVideosForYou } from "../store.js";
import styles from "./Home.module.css";

export default function Home() {
  const { store, dispatch } = useContext(tiktokContext);

  console.log(store);

  useEffect(() => {
    getVideosForYou(dispatch);
  }, []);

  const { videosForYou } = store;
  const videosJSX = videosForYou.map((video) => {
    const videoObj = {
      videourl: video.url,
      userprofileurl: video.user.profilePic,
      userId: video.user.id,
      username: video.user.username,
      description: video.description,
      song: video.music,
      likes: 100,
      comments: 100,
      shares: 100,
    };
    console.log(videoObj);
    return <Video videoObj={videoObj} />;
  });

  // This is a sample of a video object
  const videoObjSample = {
    videourl:
      "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    userprofileurl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    userId: 1,
    username: "iannyip",
    description: "This is my description",
    song: "Wow this is my song!",
    likes: 100,
    comments: 100,
    shares: 100,
  };

  return <div className={styles.homeVideos}>{videosJSX}</div>;
}
