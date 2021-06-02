import React, { useContext } from "react";

import { tiktokContext } from "../store.js";
import LoginPage from "./LoginPage.jsx";
import ProfilePage from "./ProfilePage.jsx";

export default function MePage() {
  const { store, dispatch } = useContext(tiktokContext);
  const { isUserLoggedIn } = store;

  // At the start of the app's lifecycle: useEffect(() =. {}, [])
  // if the cookie exists
  // make a backend req to check if user is valid
  // if valid, backend returns info required to update state
  //
  return <>{isUserLoggedIn ? <ProfilePage /> : <LoginPage />}</>;
}
