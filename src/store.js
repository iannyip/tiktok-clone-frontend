import React, {useReducer, useContext} from "react";
import axios from "axios";

// ------- STATE SETUP
export const initialState = {

};

const SOME_CASE = "SOME_CASE";

export function tiktokReducer(state, action) {
  switch (action.type){
    case SOME_CASE:
      // do something
      return state;
    default:
      return state;
  }
}

// ------- ACTION CREATORS

export function doSomeCase() {
  return {
    type: SOME_CASE,
    payload: {

    }
  }
}

// ------- PROVIDER
export const tiktokContext = React.createContext(null);
const {Provider} = tiktokContext;
export function tiktokProvider ({children}){
  const [store, dispatch] = useReducer(tiktokReducer, initialState);
  return <Provider value={{store, dispatch}}>{children}</Provider>
}

// ------- BACKEND REQUESTS
const BACKEND_URL = 'http://localhost:3002';


