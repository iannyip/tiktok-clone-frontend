import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import { tiktokContext } from "../store.js";

export default function Login() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div>
      <h1>This is the login page</h1>
    </div>
  );
}
