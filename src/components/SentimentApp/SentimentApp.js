import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import { init, updateField } from "../../stores/SentimentStore";
import "./SentimentApp.css";
import MainTextForm from "../MainTextForm/MainTextForm";
import WordList from "../WordList/WordList";
import _ from "lodash";

export default class SentimentApp extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <>
        <Container id="form-container">
          <MainTextForm key="MainTextForm" />
        </Container>

        <Container id="list-container">
          <WordList key={_.uniqueId("WordList")} arrayToList="positiveArray" />
          <WordList key={_.uniqueId("WordList")} arrayToList="negativeArray" />
        </Container>
      </>
    );
  }
}
