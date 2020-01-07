import React, { Component } from "react";
import { connect } from "react-redux";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import { init, updateField } from "./SentimentStore";
import "./Sentiment.css";
import ProcessUtils from "./ProcessUtils";

export class Sentiment extends Component {
  processUtils = new ProcessUtils();

  updateTextData(e) {
    let { value } = e.target;
    this.props.updateField("textData", value);
  }

  componentDidMount() {
    this.props.init();
  }

  clearText() {
    this.props.updateField("processedData", {
      positivity: "0",
      polarity: "0",
      negativity: "0"
    });
    this.props.updateField("value", "");
  }

  processText(e) {
    var incomingData;
    e.preventDefault();

    incomingData = this.processUtils.processData(this.props.textData);
    this.props.updateField("processedData", {
      positivity: incomingData.positivity,
      polarity: incomingData.polarity,
      negativity: incomingData.negativity
    });

    console.log(incomingData, this.props.processedData.positivity);
  }

  render() {
    return (
      <Container id="form-container">
        <Form id="form" onSubmit={this.processText.bind(this)}>
          <Form.Row>
            <Form.Group id="form-text-area" controlId="textArea">
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Insert your text to analyse"
                onChange={this.updateTextData.bind(this)}
                value={this.props.textData}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <div id="form-bottom-div">
              <div id="form-button">
                <Button variant="danger" type="submit">
                  <i className="fas fa-cog" /> Process!
                </Button>
              </div>
              <div id="form-processed-data">
                💹 : {this.props.processedData.polarity}
              </div>
              <div id="form-processed-data">
                😃 : {this.props.processedData.positivity}
              </div>
              <div id="form-processed-data">
                😢 : {this.props.processedData.negativity}
              </div>
            </div>
          </Form.Row>
        </Form>
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
