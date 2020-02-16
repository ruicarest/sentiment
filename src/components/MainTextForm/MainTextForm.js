import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Button, Col } from "react-bootstrap";
import { processData } from "../../services/ProcessUtils";
import { init, updateField } from "../../stores/SentimentStore";
import serverAPI from "../../services/ServerAPI";
import RetrieveButton from "../RetrieveButton/RetrieveButton";

export class MainTextForm extends Component {
  componentDidMount() {}

  processText(e) {
    var incomingData;
    e.preventDefault();

    incomingData = processData(this.props.textData);
    this.props.updateField("processedData", {
      positivity: incomingData.positivity,
      polarity: incomingData.polarity,
      negativity: incomingData.negativity
    });
    this.props.updateField("positiveArray", incomingData.positive);
    this.props.updateField("negativeArray", incomingData.negative);

    console.log(incomingData, this.props.processedData.positivity);
  }

  updateTextData(e) {
    let { value } = e.target;
    this.props.updateField("textData", value);
  }

  clearText() {
    this.props.updateField("processedData", {
      positivity: "0",
      polarity: "0",
      negativity: "0"
    });
    this.props.updateField("value", "");
  }

  render = () => {
    return (
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
            <RetrieveButton action={serverAPI.requestNewTweet} />
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
    );
  };
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateField: (fieldId, newValue) => {
      dispatch(updateField(fieldId, newValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTextForm);
