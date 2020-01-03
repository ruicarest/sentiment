import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Sentiment.css";
import ProcessUtils from "./ProcessUtils";

export class Sentiment extends Component {
  textData = "I love my dog and my cat, cute!";
  processUtils = new ProcessUtils();

  state = {
    processedData: {
      polarity: "0",
      positivity: "0",
      negativity: "0  "
    }
  };

  updateTextData(e) {
    let { value } = e.target;
    this.textData = value;
  }

  processText(e) {
    var incomingData;
    e.preventDefault();

    incomingData = this.processUtils.processData(this.textData);

    this.setState({
      processedData: {
        positivity: incomingData.positivity,
        polarity: incomingData.polarity,
        negativity: incomingData.negativy
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
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <div id="form-bottom-div">
              <div id="form-button">
                <Button variant="danger" type="submit">
                  <i className="far fa-file" /> Process!
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
