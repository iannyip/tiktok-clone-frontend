import React, { useState, useContext } from "react";
import styles from "./FooterNavbar.module.css";
import { tiktokContext } from "../store.js";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Home from "./Home";

export default function FooterNavbar() {
    const { store, dispatch } = useContext(tiktokContext);
    return (
        <ul className={styles.footerNavbar}>
            <li><HomeIcon fontSize="large" />
                <p>Home</p>
            </li>
            <li>
                <p className="icon"><SearchIcon fontSize="large" /></p>
                <p>Discover</p>
            </li>
            <li><AddBoxIcon fontSize="large" />
            </li>
            <li><SmsOutlinedIcon fontSize="large" />
                <p>Inbox</p>
            </li>
            <li><PersonOutlineOutlinedIcon fontSize="large" />
                <p>Me</p>
            </li>
        </ul>
    )
}