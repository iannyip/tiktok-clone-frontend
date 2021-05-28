import React from "react";
import styles from "./UploadPage.module.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

export default function UploadPage() {
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
