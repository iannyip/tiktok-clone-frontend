import React, { useState, useRef } from "react";
import styles from "./UploadPage.module.css";
import Button from "@material-ui/core/Button";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { firebaseApp } from "../firebase.js";

export default function UploadPage() {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [song, setSong] = useState("");
  const inputRef = useRef(null);

  const fileInputChange = (event) => {
    setUploadSuccess(false);
    setShowForm(true);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSongChange = (event) => {
    setSong(event.target.value);
  };

  const handlePostClick = () => {
    setShowForm(false);
    // Get the file reference
    const file = inputRef.current.files[0];
    // Get the firebase storage reference
    const storageRef = firebaseApp.storage().ref();
    // Create a new file reference on firebase storage
    const fileRef = storageRef.child(file.name);
    // Use this fileref to actually put the data
    setShowLoading(true);
    fileRef
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);
        console.log("uploaded");
        return snapshot.ref.getDownloadURL();
      })
      .then((result) => {
        console.log(result);
        setShowLoading(false);
        setDescription("");
        setSong("");
        setUploadSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.uploadContainer}>
      <p className={styles.uploadText}>Please upload a video</p>

      <div className={styles.uploadBtnContainer}>
        <label className={styles.uploadBtn}>
          <input ref={inputRef} type="file" onChange={fileInputChange} />
          <PhotoLibraryIcon fontSize="large" />
        </label>

        {showForm && (
          <div className={styles.uploadForm}>
            <input
              type="text"
              value={description}
              placeholder="description"
              onChange={handleDescriptionChange}
            ></input>
            <input
              type="text"
              value={song}
              placeholder="song (leave blank if original audio)"
              onChange={handleSongChange}
            ></input>
            <Button
              variant="contained"
              color="default"
              // className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={handlePostClick}
            >
              Upload
            </Button>
          </div>
        )}
        {showLoading && (
          <img
            src="/tiktok-loading.gif"
            className={styles.loadingIcon}
            alt="..."
          />
        )}

        {uploadSuccess && <p className={styles.success}>Upload successful</p>}
      </div>
    </div>
  );
}
