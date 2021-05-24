import React, { useRef, useContext, useState } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";
import FooterNavbar from "./FooterNavbar.jsx";

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
    "https://v16.tiktokcdn.com/5f61f7cef6a513ab259ea840e95e6a5c/60a77d07/video/tos/useast2a/tos-useast2a-pve-0068/6a9c330a632443a29f80253bf618d1b1/?a=1233&br=1434&bt=717&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105210327220102341060152104FE16&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRtZTpoamU7NTMzNzczM0ApNGRoZjo8OGQ0N2VpMzlpM2c0cTEzYzRkZ15gLS1kMTZzczMwMi8tNjJjMWJhMjQzL2A6Yw%3D%3D&vl=&vr=";

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
      {/* <VideoSidebar /> */}
      <FooterNavbar />
    </div>
  );
}
