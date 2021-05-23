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
  const spookyurl = "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/9524ea64d5c3493aa5c9ebce404d2e7c/?a=1988&br=1320&bt=660&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621702899&l=20210522110130010115153148039243CA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2xnaGpxOHNkNTMzNzczM0ApNDo3aTwzNDw2Nzw2NjZoNWdpZ29qMHNmamJgLS1kMTZzc2ExYWNhMGMzMTRjLmE2NjQ6Yw%3D%3D&signature=d1efca16f157f8acc81e1391b02b9937&tk=tt_webid_v2&vl=&vr=";

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
