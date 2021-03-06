import React, { useState, useContext } from "react";
import styles from "./FooterNavbar.module.css";
import { tiktokContext } from "../store.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import { Link } from "react-router-dom";

export default function FooterNavbar() {
  const { store, dispatch } = useContext(tiktokContext);
  return (
    // <Router>
    <nav className={styles.FooterStyle}>
      <ul className={styles.footerNavbar}>
        <li>
          <Link to="/home">
            <HomeIcon fontSize="default" />
            <p>Home</p>
          </Link>
        </li>
        {/* <li>
          <p className="icon">
            <SearchIcon fontSize="default" />
          </p>
          <p>Discover</p>
        </li> */}
        <li>
          <Link to="/upload">
            <AddBoxIcon fontSize="default" />
          </Link>
        </li>
        {/* <li>
          <SmsOutlinedIcon fontSize="default" />
          <p>Inbox</p>
        </li> */}
        <li>
          <Link to="/me">
            <PersonOutlineOutlinedIcon fontSize="default" />
            <p>Me</p>
          </Link>
        </li>
      </ul>
    </nav>
    // </Router>
  );
}
