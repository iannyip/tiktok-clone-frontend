import React, { useState, useContext } from "react";
import styles from "./LoginPage.module.css";
import { tiktokContext } from "../store.js";

export default function Login() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    <div className={styles.loginView}>
      <h1>This is the login page</h1>
      <div className={styles.userLogo}>
        <div className={styles.userLogoHead}></div>
        <div className={styles.userLogoBody}></div>
      </div>
    </div>
  );
}
