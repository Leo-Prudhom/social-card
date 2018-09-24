import React, { Component } from "react";
import "./css/UsrJob.css";

class UsrJob extends Component {
  render() {
    return (
      <div id="usrJob">
        <h5>{this.props.job}</h5>
      </div>
    );
  }
}

export default UsrJob;
