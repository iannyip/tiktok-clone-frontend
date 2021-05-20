import React, { useState, useContext } from "react";
import { tiktokContext } from "../store.js";
import styles from "./Video.module.css";

import VideoFooter from "./VideoFooter.jsx";
import VideoSidebar from "./VideoSidebar.jsx";

export default function Video() {
  const { store, dispatch } = useContext(tiktokContext);

  const url =
    "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/2362532506c24a66be8a02a69273732d/?a=1988&br=2652&bt=1326&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621528828&l=2021052010401601011500407009147EAD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2tmOHM1Ojc6dTMzMzczM0ApZDpnZmVmM2QzNzM3OmVmaWdeYm1nLjE0bWlfLS1iMTZzczIuNTZeYDNgNTM2XmFhMDU6Yw%3D%3D&signature=1d5bb90bf38621840fe475814dd4b591&tk=tt_webid_v2&vl=&vr=";

  return (
    <div>
      <h1>TIKTOK VIDEO HERE</h1>
      <video>
        <source src={url}></source>
      </video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}
