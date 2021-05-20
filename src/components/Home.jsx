import React, { useContext } from "react";
import Video from "./Video.jsx";
import { tiktokContext } from "../store.js";

export default function Home() {
  return (
    <div>
      <Video />
      This is the home page
    </div>
  );
}
