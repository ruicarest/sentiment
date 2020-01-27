import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import { updateField } from "../../stores/SentimentStore";
import _ from "lodash";

export class WordList extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {this.props[this.props.arrayToList] ? (
          <div id="list-div">
            {this.props[this.props.arrayToList].map(word => (
              <div key={_.uniqueId(word)} className="word-on-list">
                {word}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    arrayToList: ownProps.arrayToList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateField: (fieldId, newValue) => {
      dispatch(updateField(fieldId, newValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
