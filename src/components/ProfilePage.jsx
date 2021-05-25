import React, { useState, useContext } from "react";
import styles from "./ProfilePage.module.css";
import { tiktokContext } from "../store.js";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function ProfilePage() {
    const { store, dispatch } = useContext(tiktokContext);
    return (
        <div className={styles.profilePage}>
            <header className={styles.header}>
                <p><PersonAddOutlinedIcon /></p>
                <p className={styles.username}><span>random_name</span><ArrowDropDownOutlinedIcon /></p>
                <p><MoreVertOutlinedIcon /></p>
            </header>
            <div className={styles.picSection}>
                <img src="https://image.shutterstock.com/image-photo/self-portrait-beautiful-chinese-girl-260nw-1289866381.jpg" className={styles.profilePic} />
                <p>@random_name</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.following}>
                    <div className={styles.borderRight}></div>
                    <p className={styles.number}>2</p>
                    <p>Following</p>
                </div>
                <div className={styles.followers}>
                    <div className={styles.borderRight}></div>
                    <p className={styles.number}>2</p>
                    <p>Followers</p>
                </div>
                <div className={styles.likes}>
                    <p className={styles.number}>2</p>
                    <p>Like</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button type="submit" className={styles.editProfile}>Edit profile</button>
                <button className={styles.bookmarks}><BookmarkBorderOutlinedIcon /></button>
            </div>
            <div className={styles.videos}>
                <ViewColumnIcon />
                <FavoriteBorderOutlinedIcon />
                <LockOutlinedIcon />
            </div>
        </div>
    )
}