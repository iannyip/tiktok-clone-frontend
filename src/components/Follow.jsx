import React, { useContext, useEffect, useState } from 'react';
import styles from "./Follow.module.css";
import { followUser, unfollowUser, tiktokContext } from "../store.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from "react-router-dom";

export default function Follow() {
    const { store, dispatch } = useContext(tiktokContext);
    const { followers, following, followerFollowing } = store;

    const [userFollowing, setUserFollowing] = useState()
    const [follower, setFollower] = useState()
    const [suggested, setSuggested] = useState()
    const [followerArray, setFollowerArray] = useState((followers.map((person) => person.username)));
    const [followingArray, setFollowingArray] = useState((following.map((person) => person.username)));

    useEffect(() => {
        if (followerFollowing === 'following') {
            setUserFollowing(true);
        } else {
            setFollower(true);
            setUserFollowing(false);
        }
    }, []);

    console.log('follower/following', followerFollowing);


    const handleFollowingClick = () => {
        setUserFollowing(true);
        setFollower(false);
        setSuggested(false);
        // getFollowerFollowing(dispatch, 'following');
    }

    const handleFollowerClick = () => {
        setUserFollowing(false);
        setFollower(true);
        setSuggested(false);
        // getFollowerFollowing(dispatch, 'followers');
    }

    const handleSuggestedClick = () => {
        setUserFollowing(false);
        setFollower(false);
        setSuggested(true);
    }

    const submitUnfollow = (id) => {
        console.log('person id ', id)
        unfollowUser(dispatch, id);
    }

    const submitFollow = (id) => {
        console.log('person id', id)
        followUser(dispatch, id);
    }

    console.log('followers', followers);
    console.log('following', following);

    console.log(followers.includes(following[0]));
    return (
        <>
            <header className={styles.follow}>
                <div className={styles.topHeader}>
                    <Link to="/me">
                        <ArrowBackIcon fontSize="large" />
                    </Link>
                    <PersonAddOutlinedIcon fontSize="large" />

                </div>
                <div className={styles.bottomHeader}>
                    <ul className={styles.headerList}>
                        {userFollowing ? (<li className={styles.active} >Following {following.length}</li>
                        ) : (<li onClick={handleFollowingClick}>Following {following.length}</li>
                        )}
                        {follower ? (<li className={styles.active}>Followers {followers.length}</li>
                        ) : (<li onClick={handleFollowerClick}>Followers {followers.length}</li>
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
            <div className={styles.result}>
                {following && userFollowing && (
                    following.map((person) => {
                        return (
                            <div className={styles.followed}>
                                <div className={styles.userInfo}>
                                    <img src={person.profilePic} />
                                    <p>{person.username}</p>
                                </div>
                                <button type="submit" onClick={() => submitUnfollow(person.id)}>Unfollow</button>
                            </div>
                        )
                    })
                )
                }
                {followers && follower && (
                    followers.map((person, index) => {
                        return (
                            <div className={styles.followed}>
                                <div className={styles.userInfo}>
                                    <img src={person.profilePic} />
                                    <p>{person.username}</p>
                                </div>
                                {followingArray.includes(person.username) && (
                                    <button type="submit" onClick={() => submitUnfollow(person.id)}>Unfollow</button>
                                )}
                                {!followingArray.includes(person.username) && (
                                    <button type="submit" onClick={() => submitFollow(person.id)}>follow</button>
                                )}
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}