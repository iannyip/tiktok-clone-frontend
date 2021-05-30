import React from "react";
import styles from "./UploadPage.module.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { firebaseApp } from "../firebase.js";

import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { DragDrop, FileInput } from "@uppy/react";

export default function UploadPage() {
  // UPPY CODE
  const uppy = new Uppy({
    id: "Puppy",
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

  const fileInputChange = (event) => {
    // Get the file reference
    const file = event.target.files[0];
    // Get the firebase storage reference
    const storageRef = firebaseApp.storage().ref();
    // Create a new file reference on firebase storage
    const fileRef = storageRef.child(file.name);
    // Use this fileref to actually put the data
    fileRef
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);
        console.log("uploaded");
        return snapshot.ref.getDownloadURL();
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className={styles.uploadContainer}>
      <p className={styles.uploadText}>Please upload a video</p>
      {/* <FileInput uppy={uppy} pretty={true} inputName="files[]" /> */}

      <div className={styles.uploadBtnContainer}>
        <label className={styles.uploadBtn}>
          <input type="file" onChange={fileInputChange} />
          <PhotoLibraryIcon fontSize="large" />
        </label>
      </div>
    </div>
  );
}
