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
  following: null,
  followers: null,
  videosForYou: [],
};

const UPDATE_LIKES = "UPDATE_LIKES";
const LOAD_LIKES = "LOAD_LIKES";
const LOGIN_USER = "LOGIN_USER";
const LOAD_VIDEOS = "LOAD_VIDEOS";
const USER_INFO = "USER_INFO";
const LOAD_FOLLOWS = "LOAD_FOLLOWS";

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
    case LOAD_FOLLOWS:
      return {...state, loggedInUserInfo: {follows: action.payload.follows} }
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

function loadFollows (followsObj) {
  return {
    type: LOAD_FOLLOWS,
    payload: {
      follows: followsObj
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

// ------- BACKEND REQUESTS
const BACKEND_URL = 'http://localhost:3004';

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

export function getFollows (dispatch) {
  axios
    .get (BACKEND_URL + '/userFollows')
    .then((response) => {
      console.log('user followwwws====', response.data);
      dispatch((loadFollows(response.data)))
      })
    .catch ((error) => console.log(error))
}