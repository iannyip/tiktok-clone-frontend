import React, { useState, useContext, useRef } from "react";
import styles from "./Register.module.css";
import { tiktokContext, registerUser } from "../store.js";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { firebaseApp } from "../firebase.js";

export default function Register() {
    const { store, dispatch } = useContext(tiktokContext);

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const inputRef = useRef(null);

    const submitForm = () => {
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
                const data = {
                    username: name,
                    password: password,
                    email: email,
                    profilePic: result,
                }
                registerUser(dispatch, data);
                setName();
                setPassword();
                setEmail();
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className={styles.register}>
            <div className={styles.iconDiv}>
                <AccountBoxIcon fontSize="large" />
                <h3>Create Account</h3>
            </div>
            <form className={styles.registerForm}>
                <div className={styles.inputName}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className={styles.profilepic}>
                    <label htmlFor="profilepic">Profile picture: </label>
                    <input ref={inputRef} type="file" accept="image/*" />
                </div>
            </form>
            <div className={styles.registerButtonDiv}>
                <button type="submit" onClick={submitForm}>Register</button>
            </div>
        </div>

    )
}