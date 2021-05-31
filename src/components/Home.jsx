import React, { useContext, useEffect, useState, useRef } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import Video from "./Video.jsx";
import { tiktokContext, getVideosForYou } from "../store.js";
import styles from "./Home.module.css";
import ProfilePage from "./ProfilePage.jsx";
import Follow from "./Follow.jsx";

export default function Home() {
  const { store, dispatch } = useContext(tiktokContext);
  const [height, setHeight] = useState(0);
  const [queriedVideos, setQueriedVideos] = useState(false);
  const [reachingEnd, setReachingEnd] = useState(false);
  const [loadedNVideos, setLoadedNVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const refScroller = useRef(null);

  console.log(store);
  const { loggedInUserId, isUserLoggedIn } = store;

  // makes backend query, gets the window heightt
  useEffect(() => {
    const newHeight = window.innerHeight;
    setHeight(newHeight);
    getVideosForYou(dispatch);
  }, []);

  // Once store contains all the videos,
  // Create a copy in this component for local management
  const { videosForYou } = store;
  useEffect(() => {
    if (videosForYou.length > 0) {
      setAllVideos([...videosForYou]);
      setQueriedVideos(true);
    }
  }, [videosForYou]);

  // Initially, we will load 5 videos into the queue
  useEffect(() => {
    if (queriedVideos === true) {
      const initialize10 = [];
      for (let i = 0; i < 5; i += 1) {
        initialize10.push(allVideos.shift());
      }
      setAllVideos(allVideos);
      setLoadedNVideos(initialize10);
    }
  }, [queriedVideos]);

  // Each time the user reaches the last (5th) video
  // We will -2 videos and +2 videos to the queue
  useEffect(() => {
    if (reachingEnd === true) {
      for (let i = 0; i < 2; i += 1) {
        loadedNVideos.shift();
        loadedNVideos.push(allVideos.shift());
      }
      setAllVideos(allVideos);
      setLoadedNVideos(loadedNVideos);
      setReachingEnd(false);
      // if user has reached the end of the list, reload all previous videos again
      if (allVideos.length < 5) {
        setAllVideos([...allVideos, ...videosForYou]);
      }
    }
  }, [reachingEnd]);

  // Function that checks if the user has reached the end of queue
  // This runs each time user scrolls (onScroll)
  const handleScroll = () => {
    if (refScroller.current.scrollTop > 0.95 * height * 3) {
      console.log("time for reload!");
      setReachingEnd(true);
    }
  };

  // use Map to render in a loop
  // The 5 videos to be displayed at any time
  const videosJSX = loadedNVideos.map((video) => {
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
    return <Video key={video.id} videoObj={videoObj} />;
  });

  // This is a sample of a video object
  const videoObjSample = {
    videoId: 1,
    videourl:
      "https://firebasestorage.googleapis.com/v0/b/tiktok-clone-78b71.appspot.com/o/mixkit-video-of-a-cat-played-four-times-with-different-colored-13784.mp4?alt=media&token=4e49d3a8-70fd-4de7-96ec-212271d26f8a",
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
    <div
      className={styles.homeVideos}
      ref={refScroller}
      onScroll={handleScroll}
    >
      {/* <Video videoObj={videoObjSample} />
      <Video videoObj={videoObjSample} /> */}
      {videosJSX}
    </div>
  );
}
