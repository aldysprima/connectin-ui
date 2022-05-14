import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

// Redux Config

// 1. Initialize value
const INITIAL_STATE = {
  uid: "",
  username: "",
  email: "",
  status: "",
  fullname: "",
  bio: "",
  address: "",
  profilepicture: "",
};
// 2. create reducer
const Reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "LOGIN") {
    return {
      uid: action.payload.uid,
      username: action.payload.username,
      email: action.payload.email,
      status: action.payload.status,
      fullname: action.payload.fullname,
      bio: action.payload.bio,
      address: action.payload.address,
      profilepicture: action.payload.profilepicture,
    };
  } else if (action.type === "LOGOUT") {
    return INITIAL_STATE;
  } else if (action.type === "UPDATEPROFILE") {
    return {
      ...state,
      username: action.payload.username,
      fullname: action.payload.fullname,
      bio: action.payload.bio,
      address: action.payload.address,
      profilepicture: action.payload.profilepicture,
    };
  } else {
    return state;
  }
};
// 3. create global store
const store = createStore(Reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
