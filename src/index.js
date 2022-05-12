import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

// Redux Config

// 1. Initialize value
const INITIAL_STATE = {
  username: "",
  email: "",
  isLoggedIn: false,
};
// 2. create reducer
const Reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "LOGIN") {
    return {
      username: action.payload.username,
      email: action.payload.email,
      isLoggedIn: true,
    };
  } else if (action.type === "LOGOUT") {
    return INITIAL_STATE;
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
