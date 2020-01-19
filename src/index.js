import React from "react";
import { render } from "react-dom";
import SentimentStContainer from "./components/SentimentApp/SentimentStContainer";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <SentimentStContainer key={"sentimentContainer"} />,
  document.getElementById("root")
);
