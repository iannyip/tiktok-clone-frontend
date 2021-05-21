import React, { useRef, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";

export default function Video() {
  const { store, dispatch } = useContext(tiktokContext);
  const videoRef = useRef(null);

  const url =
    "https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/881a1d3793e34f6796360e2a24eacb00/?a=1988&br=1914&bt=957&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621585663&l=202105210227300102340821964900FAB4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M3Zxb2VvOWtseTMzZzczM0ApOTNlZzZpOTtmNzQzNjs8OmcxYXMzMnBlbTVfLS02MTRzcy8vMmMtYzJhNjI1NV40NjE6Yw%3D%3D&signature=77d37f0848cbc2ee1eee8ee9b1517754&tk=tt_webid_v2&vl=&vr=";

  const copiedlinkadd =
    "https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/881a1d3793e34f6796360e2a24eacb00/?a=1988&br=1914&bt=957&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621594888&l=20210521050115010115004074130BF26A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M3Zxb2VvOWtseTMzZzczM0ApOTNlZzZpOTtmNzQzNjs8OmcxYXMzMnBlbTVfLS02MTRzcy8vMmMtYzJhNjI1NV40NjE6Yw%3D%3D&signature=d09b1fea4b68fdefc7ef1ab39524adb1&tk=tt_webid_v2&vl=&vr=";

  const onVideoPress = () => {
    // videoRef.current;
  };

  return (
    <div className={styles.video}>
      {/* <iframe
        title="video"
        ref={videoRef}
        onClick={onVideoPress}
        allow="autoplay"
        src={url}
        className={styles.iframeVid}
        frameborder="0"
      ></iframe> */}

      <video src={copiedlinkadd}></video>
      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  );
}
