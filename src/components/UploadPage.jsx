import React from "react";
import styles from "./UploadPage.module.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { DragDrop } from "@uppy/react";

export default function UploadPage() {
  // UPPY CODE
  const uppy = new Uppy({
    meta: { type: "avatar" },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true,
  });

  uppy.use(Tus, { endpoint: "/upload" });

  uppy.on("complete", (result) => {
    const url = result.successful[0].uploadURL;
    console.log("UPLOADED URL: ");
    console.log(url);
    // store.dispatch({
    //   type: "SET_USER_AVATAR_URL",
    //   payload: { url: url },
    // });
  });
  // UPPY CODE

  return (
    <div className={styles.uploadContainer}>
      <p className={styles.uploadText}>Please upload a video</p>
      <div className={styles.uploadBtnContainer}>
        <div className={styles.uploadBtn}>
          <PhotoLibraryIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
