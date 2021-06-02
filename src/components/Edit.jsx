import React, { useState, useContext, useRef, useEffect } from "react";
import styles from "./Edit.module.css";
import { tiktokContext, registerUser, getUserDetails, editDetails } from "../store.js";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { firebaseApp } from "../firebase.js";
import { Link } from "react-router-dom";

export default function Edit() {
    const { store, dispatch } = useContext(tiktokContext);

    const { loggedInUserInfo } = store;
    console.log('user details', loggedInUserInfo);

    const [name, setName] = useState(loggedInUserInfo.username);
    const [profilePic, setProfilePic] = useState(loggedInUserInfo.profilePic);
    const [newProfilePic, setNewProfilePic] = useState();
    const inputRef = useRef(null);

    const onChooseFile = () => {
        // Get the file reference
        const file = inputRef.current.files[0];
        // Get the firebase storage reference
        const storageRef = firebaseApp.storage().ref();
        // Create a new file reference on firebase storage
        const fileRef = storageRef.child(file.name);
        // Use this fileref to actually put the data
        // setShowLoading(true);
        fileRef
            .put(file)
            .then((snapshot) => {
                console.log(snapshot);
                console.log("uploaded");
                return snapshot.ref.getDownloadURL();
            })
            .then((result) => {
                console.log(result);
                setNewProfilePic(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const submitForm = () => {
        const data = {
            username: name,
            profilePic: newProfilePic,
        }
        editDetails(data, dispatch);
    };


    return (
        <>
            { loggedInUserInfo && (
                <div className={styles.register}>
                    <div className={styles.iconDiv}>
                        <AccountBoxIcon fontSize="large" />
                        <h3>Edit Details</h3>
                    </div>
                    <form className={styles.registerForm}>
                        <div className={styles.inputName}>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className={styles.profilepic}>
                            <div className={styles.picDiv}>
                                {newProfilePic ? (
                                    <img src={newProfilePic}></img>
                                ) : (
                                    <img src={profilePic}></img>
                                )}
                                <label htmlFor="profilepic">Profile picture </label>
                            </div>
                            <input ref={inputRef} type="file" accept="image/*" onChange={onChooseFile} />
                        </div>
                    </form>
                    <div className={styles.registerButtonDiv}>
                        <button type="submit" onClick={submitForm}>
                            <Link to="/me">
                                Edit
                            </Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}