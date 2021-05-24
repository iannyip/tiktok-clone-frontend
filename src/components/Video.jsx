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

  const caturl =
    "https://v19-us.tiktokcdn.com/a44bc312a252e8bea02d5bdc41cf7446/60ab77b4/video/tos/useast2a/tos-useast2a-ve-0068c001/7ceb0662f84f4d769e51458eef7a47dc/?a=1233&br=590&bt=295&cd=0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202105240353420101901851302600EFDF&lr=&mime_type=video_mp4&net=0&pl=0&qs=4&rc=M2tzdmk8c2lxNTMzNzczM0ApNDk4ZDw6ZTxlN2k1Mzc4NGc1cm0vZDZfa2BgLS1kMTZzc2NfXi4tYjNiLWExMjIuYTM6Yw%3D%3D&vl=&vr=";

  return (
    <div className={styles.video}>

      <video
        className={styles.iframeVid}
        loop
        onClick={videoPress}
        ref={videoRef}
        src={spookyurl}
      >
        {/* <source
          src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/8b447dff694147b282624582b5d91574/?a=1988&br=1342&bt=671&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621849001&l=202105240336260101150040671F0A2628&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2tzdmk8c2lxNTMzNzczM0ApOzZnOTk4N2Q8N2kzNjw7aGc1cm0vZDZfa2BgLS1kMTZzc19hMjRgYzJiLWMwMmJhMjE6Yw%3D%3D&signature=2140d9a12872b209ad8043beac5d8a49&tk=tt_webid_v2&vl=&vr="
          type="video/mp4"
        ></source> */}
      </video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}
