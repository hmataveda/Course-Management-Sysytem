import React from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "../src/store";
import { App } from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";

// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      autoClose={1800}
      position="top-right"
      hideProgressBar
      theme="light"
    />
  </>,

  document.getElementById("app")
);
