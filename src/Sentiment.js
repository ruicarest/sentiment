import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import { init, updateField } from "./SentimentStore";
import "./Sentiment.css";
import ProcessUtils from "./ProcessUtils";
import MainTextForm from "./MainTextForm/MainTextForm";

export class Sentiment extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <>
        <Container id="form-container">
          <MainTextForm key="MainTextForm" {...this.props} />
        </Container>

        <Container id="positive-array-container">
          {this.props.positiveArray.map(word => (
            <div key={word}>{word}</div>
          ))}
        </Container>

        <Container id="negative-array-container">
          {this.props.negativeArray.map(word => (
            <div key={word}>{word}</div>
          ))}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: () => {
      dispatch(init());
    },
    updateField: (fieldId, newValue) => {
      dispatch(updateField(fieldId, newValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sentiment);
