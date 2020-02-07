import React from "react";
import { render } from "react-dom";
import SentimentStContainer from "./components/SentimentApp/SentimentStContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SentimentReducer from "./stores/SentimentStore";

const store = createStore(SentimentReducer, composeWithDevTools());

// const store =
//   process.env.NODE_ENV === "production"
//     ? createStore(SentimentReducer)
//     : createStore(SentimentReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <SentimentStContainer key={"sentimentContainer"} />
  </Provider>,
  document.getElementById("root")
);
