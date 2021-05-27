import React, { useContext, useState } from 'react';
import styles from "./Follow.module.css";
import { tiktokContext } from "../store.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export default function Follow() {
    const { store, dispatch } = useContext(tiktokContext);
    const [following, setFollowing] = useState(true)
    const [followers, setFollowers] = useState(false)
    const [suggested, setSuggested] = useState(false)

    const handleFollowingClick = () => {
        setFollowing(true);
        setFollowers(false);
        setSuggested(false);
    }

    const handleFollowersClick = () => {
        setFollowing(false);
        setFollowers(true);
        setSuggested(false);
    }

    const handleSuggestedClick = () => {
        setFollowing(false);
        setFollowers(false);
        setSuggested(true);
    }

    return (
        <>
            <header className={styles.follow}>
                <div className={styles.topHeader}>
                    <ArrowBackIcon fontSize="large" />
                    <PersonAddOutlinedIcon fontSize="large" />
                </div>
                <div className={styles.bottomHeader}>
                    <ul className={styles.headerList}>
                        {following ? (<li className={styles.active} >Following 0</li>
                        ) : (<li onClick={handleFollowingClick}>Following 0</li>
                        )}
                        {followers ? (<li className={styles.active}>Followers 2</li>
                        ) : (<li onClick={handleFollowersClick}>Followers 2</li>
                        )}
                        {suggested ? (<li className={styles.active}>Suggested</li>
                        ) : (<li onClick={handleSuggestedClick}>Suggested</li>
                        )}
                    </ul>
                </div>
            </header>
            <div className={styles.searchInput}>
                <p><SearchOutlinedIcon /></p>
                <input type="text" placeholder="Search" />
            </div>
        </>
    )
}