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
      <Container id="form-container">
        <MainTextForm key="MainTextForm" {...this.props} />
      </Container>
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
