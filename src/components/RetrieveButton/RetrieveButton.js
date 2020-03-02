import "./RetrieveButton.css";
import React, { Component } from "react";
import _ from "lodash";

class RetrieveButton extends Component {
  id = _.uniqueId("RetrieveButton");

  //TODO: change button id to className
  render() {
    return (
      <button
        key={this.id}
        onClick={this.props.action}
        id="RetrieveButton"
        className={"btn" + " " + this.props.buttonType}
        type="button"
      >
        <div className="file-button-icon">
          <i className={this.props.buttonIcon} />
        </div>{" "}
        Reload Tweets
      </button>
    );
  }
}

export default RetrieveButton;
