import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Sentiment.css";
import ProcessUtils from "./ProcessUtils";

export class Sentiment extends Component {
  processUtils = new ProcessUtils();

  state = {
    processedData: {
      polarity: "0",
      positivity: "0",
      negativity: "0  "
    },
    textData: ""
  };

  updateTextData(e) {
    let { value } = e.target;
    this.setState({
      textData: value
    });
  }

  clearText() {
    this.setState({
      processedData: {
        positivity: "0",
        polarity: "0",
        negativity: "0"
      },
      value: ""
    });
  }

  processText(e) {
    var incomingData;
    e.preventDefault();

    incomingData = this.processUtils.processData(this.state.textData);

    this.setState({
      processedData: {
        positivity: incomingData.positivity,
        polarity: incomingData.polarity,
        negativity: incomingData.negativity
      }
    });

    console.log(incomingData, this.state.processedData.positivity);
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
                value={this.state.textData}
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
                💹 : {this.state.processedData.polarity}
              </div>
              <div id="form-processed-data">
                😃 : {this.state.processedData.positivity}
              </div>
              <div id="form-processed-data">
                😢 : {this.state.processedData.negativity}
              </div>
            </div>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}
