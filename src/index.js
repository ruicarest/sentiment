import React from "react";
import { render } from "react-dom";
import SentimentStContainer from "./components/SentimentApp/SentimentStContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";

import SentimentReducer from "./stores/SentimentStore";

import { createEpicMiddleware } from "redux-observable";
import { runAlgorithmEpic } from "./epics/runAlgorithm";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  SentimentReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(runAlgorithmEpic);

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
