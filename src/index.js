import React from "react";
import { render } from "react-dom";
import SentimentStContainer from "./SentimentStContainer";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <SentimentStContainer key={"sentimentContainer"} />,
  document.getElementById("root")
);
