import React, { useContext, useEffect, useState } from "react";
import Video from "./Video.jsx";
import { tiktokContext, getVideosForYou } from "../store.js";
import styles from "./Home.module.css";
import ProfilePage from "./ProfilePage.jsx";

export default function Home() {
  const { store, dispatch } = useContext(tiktokContext);
  const [height, setHeight] = useState(0);
  const [queriedVideos, setQueriedVideos] = useState(false);
  const [loaded10Videos, setLoaded10Videos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  console.log(store);
  const { loggedInUserId, isUserLoggedIn } = store;

  useEffect(() => {
    console.log("gettting all videos from backend!");
    const newHeight = window.innerHeight;
    setHeight(newHeight);
    getVideosForYou(dispatch);
  }, []);

  const { videosForYou } = store;

  useEffect(() => {
    console.log("videosForYou has been loaded");
    console.log(videosForYou);
    if (videosForYou.length > 0) {
      console.log("actually loaded");
      setAllVideos(videosForYou);
      setQueriedVideos(true);
    }
  }, [videosForYou]);

  useEffect(() => {
    if (queriedVideos === true) {
      console.log("allVideos has been set!!");
      const initialize10 = [];
      for (let i = 0; i < 10; i += 1) {
        initialize10.push(allVideos.shift());
      }
      setAllVideos(allVideos);
      setLoaded10Videos(initialize10);
    }
  }, [queriedVideos]);

  console.log(loaded10Videos);
  const videosJSX = loaded10Videos.map((video) => {
    const likersAsObj = video.likes;
    const likers = likersAsObj.map((liker) => liker["user_id"]);
    const videoObj = {
      videoId: video.id,
      videourl: video.url,
      userprofileurl: video.user.profilePic,
      userId: video.user.id,
      username: video.user.username,
      description: video.description,
      song: video.music,
      userliked: isUserLoggedIn && likers.includes(loggedInUserId),
      likes: likers.length,
      comments: 100,
      shares: 100,
    };
    // console.log(video);
    // console.log(videoObj);
    return <Video key={video.id} videoObj={videoObj} />;
  });

  // This is a sample of a video object
  const videoObjSample = {
    videoId: 1,
    videourl:
      "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    userprofileurl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    userId: 1,
    username: "iannyip",
    description: "This is my description",
    song: "Wow this is my song!",
    userliked: false,
    likes: 100,
    comments: 100,
    shares: 100,
  };

  return (
    <div className={styles.homeVideos}>
      <Video videoObj={videoObjSample} />
      <Video videoObj={videoObjSample} />
      {videosJSX}
    </div>
  );
}
