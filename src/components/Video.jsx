import React, { useRef, useContext, useState } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";
import FooterNavbar from "./FooterNavbar.jsx";

export default function Video({ videoObj }) {
  const { store, dispatch } = useContext(tiktokContext);
  const videoRef = useRef(null);

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

  return (
    <div className={styles.video}>
      <video
        className={styles.iframeVid}
        loop
        autoPlay
        muted
        onClick={videoPress}
        ref={videoRef}
        src={videoObj.videourl}
      ></video>
      <VideoFooter videoObj={videoObj} />
      <VideoSidebar videoObj={videoObj} />
    </div>
  );
}
