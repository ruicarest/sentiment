import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SentimentApp from "./SentimentApp";
import SentimentReducer from "./../../stores/SentimentStore";

// const store =
//   process.env.NODE_ENV === "production"
//     ? createStore(SentimentReducer)
//     : createStore(SentimentReducer, composeWithDevTools());

const store = createStore(SentimentReducer, composeWithDevTools());

const SentimentStContainer = () => {
  return [
    <Provider key="sentimentStorePrivider" store={store}>
      <SentimentApp key="sentimentApp" />
    </Provider>
  ];
};

export default SentimentStContainer;
