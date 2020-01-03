import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Sentiment.css";
import ProcessUtils from "./ProcessUtils";

export class Sentiment extends Component {
  textData = "I love my dog and my cat, cute!";
  processUtils = new ProcessUtils();
  processedData;

  updateTextData(e) {
    let { value } = e.target;
    this.textData = value;
  }

  processText(e) {
    e.preventDefault();
    this.processUtils.processData(this.textData);
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
            <Button id="form-button" variant="danger" type="submit">
              <i className="far fa-file" /> Process!
            </Button>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}
