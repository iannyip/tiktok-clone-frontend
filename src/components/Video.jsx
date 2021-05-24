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
  const spookyurl = "https://v39-as.tiktokcdn.com/3992c3698d4737eec16306a2c1e769a8/60ab3adc/video/tos/useast2a/tos-useast2a-pve-0068/501448358bb3426f9e5f49d718141b9a/?a=1233&br=3620&bt=1810&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105232333410102340930150A47BD26&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRlN3Y8Omo8NTMzNzczM0ApaDk8OGg2aDszN2lkZjo8ZmdeMnEwcTNhaGdgLS1kMTZzc2EwM2EtM2JfLV4uNDVfMzY6Yw%3D%3D&vl=&vr=";

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
