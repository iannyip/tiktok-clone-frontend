import React, {useReducer, useContext} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

// ------- STATE SETUP
export const initialState = {
  currentView: "Home",
  headerNav: "For You",
  loggedInUserId: null,
  username: null,
  loggedInUserInfo: null,
  isUserLoggedIn: false,
  profilepic: null,
  following: [],
  followers: [],
  videosForYou: [],
  likedVideos: [],
  followerFollowing:null,
  userDetails: null,
};

const UPDATE_LIKES = "UPDATE_LIKES";
const LOAD_LIKES = "LOAD_LIKES";
const LOGIN_USER = "LOGIN_USER";
const LOAD_VIDEOS = "LOAD_VIDEOS";
const USER_INFO = "USER_INFO";
const LOAD_FOLLOWERS = "LOAD_FOLLOWERS";
const LOAD_FOLLOWING = "LOAD_FOLLOWING";
const LOAD_LIKED = "LOAD_LIKED";
const LOAD_FOLLOWERFOLLOWING = "LOAD_FOLLOWERFOLLOWING";
const LOAD_DETAILS = "LOAD_DETAILS";

export function tiktokReducer(state, action) {
  switch (action.type){
    case UPDATE_LIKES:
      // do something
      return {...state, likes: action.payload.likes};
    case LOAD_LIKES:
      return {...state, likes: action.payload.likes};
    case LOGIN_USER: 
      return {...state, loggedInUserInfo: action.payload.logInUser, isUserLoggedIn: true, loggedInUserId: action.payload.logInUser.id}
    case LOAD_VIDEOS:
      return {...state, videosForYou: action.payload.videos}
    case USER_INFO:
      return {...state, loggedInUserInfo: action.payload.info}
    case LOAD_FOLLOWERS:
      return {...state, followers: action.payload.followers }
    case LOAD_FOLLOWING:
      return {...state, following: action.payload.following}
    case LOAD_LIKED:
      return {...state, likedVideos: action.payload.liked}
    case LOAD_FOLLOWERFOLLOWING:
      return {...state, followerFollowing: action.payload.followerFollowing}
    case LOAD_DETAILS:  
      return {...state, userDetails: action.payload.userDetails}
    default:
      return state;
  }
}

// ------- ACTION CREATORS

export function updateLikesAction(likes) {
  return {
    type: UPDATE_LIKES,
    payload: {
      likes
    }
  }
}

function loginUser(userObj) {
  return {
    type: LOGIN_USER,
    payload: {
      logInUser: userObj
    }
  }
}

function loadVideosForYou(videoArr){
  return{
    type: LOAD_VIDEOS,
    payload: {
      videos: videoArr
    }
  }
}

function loadUserInfo (userObj) {
  return {
    type: USER_INFO,
    payload: {
      info: userObj
    }
  }
}

function loadFollowers (followerObj) {
  console.log(followerObj)
  return {
    type: LOAD_FOLLOWERS,
    payload: {
      followers: followerObj
    }
  }
}

function loadFollowing (followingObj) {
  return {
    type: LOAD_FOLLOWING,
    payload: {
      following: followingObj
    }
  }
}

function loadLikedVideos (videosObj) {
  return {
    type: LOAD_LIKED,
    payload: {
      liked: videosObj
    }
  }
}

function loadFollowerFollowing (str) {
  return {
    type: LOAD_FOLLOWERFOLLOWING,
    payload: {
      followerFollowing: str  
    }
  }
} 

function loadUserDetails (userObj) {
  return {
    type: LOAD_DETAILS,
    payload: {
      userDetails: userObj
    }
  }
}

// ------- PROVIDER
export const tiktokContext = React.createContext(null);
const {Provider} = tiktokContext;
export function TiktokProvider ({children}){
  const [store, dispatch] = useReducer(tiktokReducer, initialState);

  return <Provider value={{store, dispatch}}>{children}</Provider>
}

export function getFollowerFollowing (dispatch, str) {
  dispatch(loadFollowerFollowing(str))
}

// ------- BACKEND REQUESTS

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

// update likes table and return number of likes a video has
export function addLike(dispatch, videoId, userId ) {
  axios
    .post(BACKEND_URL + '/addLike', {
      userId, videoId
    })
    .then((response) => {
      console.log(response.data);
      // dispatch(updateLikesAction(response.data.newCount))
      })
    .catch((error) => console.log(error))
    
}

// update likes table and return number of likes a video has
export function subtractLike(dispatch, videoId, userId) {
  axios
    .post(BACKEND_URL + '/subtractLike', {
      videoId, userId
    })
    .then((response) => {
      dispatch(updateLikesAction(response.data.newCount))
      })
    .catch((error) => console.log(error))
    
}

export function login (dispatch, username, password) {
  axios
  .post(BACKEND_URL + '/login', {username, password})
  .then((result) => {
    dispatch(loginUser(result.data));
  })
  .catch ((error) => console.log(error))
}

export function getVideosForYou (dispatch) {
  axios
  .get(BACKEND_URL + '/foryou')
  .then((result) => {
    console.log(result.data);
    dispatch(loadVideosForYou(result.data))
  })
  .catch((error) => {console.log(error)})
}

export function getUserInfo (dispatch) {
  axios
    .get(BACKEND_URL + '/userInfo')
    .then((response) => {
      console.log('user info ======', response.data);
      dispatch(loadUserInfo(response.data))
    })
    .catch((error) => console.log(error))
}

export function getFollowers (dispatch) {
  axios
    .get (BACKEND_URL + '/userFollowers')
    .then((response) => {
      console.log('followers====', response.data);
      dispatch(loadFollowers(response.data.followed))
      })
    .catch ((error) => console.log(error))
}

export function getFollowing (dispatch) {
  axios
    .get (BACKEND_URL + '/userFollowing')
    .then((response) => {
      console.log('following======', response.data);
      dispatch(loadFollowing(response.data.following))
    })
    .catch((error) => console.log(error))
}

export function uploadVideo (description, music, url, userId) { 
  axios
    .post(BACKEND_URL + '/uploadVideo', {description, music, url, userId})
    .then((response) => {
      console.log('uploaded', response.data);
    })
    .catch((error) => console.log(error))
}
export function getLikedVideos (dispatch) {
  axios
    .get (BACKEND_URL + '/likedVideos')
    .then ((response) => {
      console.log('liked videos=====', response.data);
      dispatch(loadLikedVideos(response.data.liked));
    })
    .catch ((error) => {
      console.log(error)
    })
}

export function followUser (dispatch, id) {
  axios
    .post (BACKEND_URL + '/followUser', 
     { userId: id })
    .then((response) => {
      console.log('updated list of people user is following', response.data);
      dispatch(loadFollowing(response.data.following));
    })
    .catch((error) => {
      console.log(error);
    })
}

export function unfollowUser (dispatch, id) {
  axios
    .post(BACKEND_URL + '/unfollowUser', 
     { userId: id })
    .then((response) => {
      console.log('updated list of people user is following', response.data);
      dispatch(loadFollowing(response.data.following));
    })
    .catch((error) => {
      console.log(error);
    })
}

export function registerUser (dispatch, data) {
  axios
    .post(BACKEND_URL + '/registerUser', 
    data)
    .then((response) => {
      console.log('new user added', response.data);
      dispatch(loginUser(response.data));
    })
    .catch((error) => console.log(error));
}

export function getUserDetails (dispatch) {
  axios
    .get(BACKEND_URL + '/getUserDetails')
    .then((response) => {
      console.log('user details', response.data);
      dispatch(loadUserDetails(response.data));
    })
    .catch((error) => console.log(error));
}

export function editDetails (data, dispatch) {
  console.log('edited data', data);

  axios
    .post(BACKEND_URL + '/editDetails', data)
    .then((response) => {
      console.log('updated details',response.data[0]);
      login(dispatch, response.data[0].username, response.data[0].password);
    })
    .catch((error) => console.log(error));
}