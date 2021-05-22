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
  const spookyurl =
    "https://v39-as.tiktokcdn.com/ebc028ba6ef59b11441de4440d7a33d7/60a9187f/video/tos/useast2a/tos-useast2a-ve-0068c003/91399ca741024f3ba5972865d8405f6c/?a=1233&br=1770&bt=885&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105220842420101150790641B863BE7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajc5b3V4bDh2NTMzNzczM0ApPDk1O2kzZDw1N2ZmZzo7ZGduZXMzbzVeY2dgLS1kMTZzczZhXjNeYS4yYTYtNjEzNGE6Yw%3D%3D&vl=&vr=";

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
