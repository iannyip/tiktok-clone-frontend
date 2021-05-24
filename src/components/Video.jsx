import React, { useRef, useContext, useState } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";

export default function Video() {
  const { store, dispatch } = useContext(tiktokContext);
  const videoRef = useRef(null);

  // ****** added this ********
  const [play, setPlay] = useState(false);
  const videoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  // this one can be used
  const spookyurl = "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4";

  return (
    <div className={styles.video}>

      <video
        className={styles.iframeVid}
        loop
        onClick={videoPress}
        ref={videoRef}
        src={spookyurl}
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}
