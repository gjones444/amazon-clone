// Import reducer and initialState from reducer.js and then we import the StateProvider component from the StateProvider.js.
// The app component is enclosed with StateProvider so that children get access to the states.
// The reducer and initialState are passed to the StateProvider allowing the State to identify the initial state and reducer.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);