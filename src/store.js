import React, {useReducer, useContext} from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

// ------- STATE SETUP
export const initialState = {
  currentView: "Home",
  headerNav: "For You",
  userId: null,
  username: null,
  profilepic: null,
  following: null,
  followers: null,
  likes: null,
  videos: [],
  videoArr: [],
};

const UPDATE_LIKES = "UPDATE_LIKES";
const LOAD_LIKES = "LOAD_LIKES";

export function tiktokReducer(state, action) {
  switch (action.type){
    case UPDATE_LIKES:
      // do something
      return {...state, likes: action.payload.likes};
    case LOAD_LIKES:
      return {...state, likes: action.payload.likes};
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

export function loadLikesAction(likes) {
  return {
    type: LOAD_LIKES,
    payload: {
      likes
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
export function addLike(dispatch, likes) {
  axios
    .post(BACKEND_URL + '/addLike', {
      // TODO: like id is hardcoded, needs to be changed !!!
      videoId: 1,
    })
    .then((response) => {
      console.log(response.data);
      dispatch(updateLikesAction(response.data.newCount))
      })
    .catch((error) => console.log(error))
    
}

// update likes table and return number of likes a video has
export function subtractLike(dispatch, likes) {
  axios
    .post(BACKEND_URL + '/subtractLike', {
      // TODO: like id is hardcoded, needs to be changed !!!
      videoId : 1,
    })
    .then((response) => {
      console.log(response.data);
      dispatch(updateLikesAction(response.data.newCount))
      })
    .catch((error) => console.log(error))
    
}

// get the number of likes a certain video has
export function loadLikes (dispatch) {
  axios
    // TODO: video id is hard coded, needs to be changed!!
      .get(BACKEND_URL + '/likes/1')
      .then((response) => {
        console.log(response.data)
        dispatch(loadLikesAction(response.data.likes))
      })
      .catch((error) => console.log(error))
}


