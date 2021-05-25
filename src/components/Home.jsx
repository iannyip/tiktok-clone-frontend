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

  const videoObj = {
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
  const videoObj2 = {
    videourl:
      "https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-at-winter-39878-large.mp4",
    userprofileurl:
      "https://image.shutterstock.com/image-photo/self-portrait-beautiful-chinese-girl-260nw-1289866381.jpg",
    userId: 2,
    username: "penny",
    description: "This is my description no.2",
    song: "This is song no. 2!",
    likes: 200,
    comments: 215,
    shares: 200,
  };

  return (
    <div className={styles.homeVideos}>
      <Video videoObj={videoObj} />
      <Video videoObj={videoObj2} />
      <Video videoObj={videoObj} />
      <Video videoObj={videoObj2} />
    </div>
  );
}
