import React, { useContext } from "react";

import { tiktokContext } from "../store.js";
import LoginPage from "./LoginPage.jsx";
import ProfilePage from "./ProfilePage.jsx";

export default function MePage() {
  const { store, dispatch } = useContext(tiktokContext);
  const { isUserLoggedIn } = store;

  return <>{isUserLoggedIn ? <ProfilePage /> : <LoginPage />}</>;
}
