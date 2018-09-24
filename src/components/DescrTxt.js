import React, { Component } from "react";
import "./css/DescrTxt.css";

class DescrTxt extends Component {
  render() {
    return (
      <div id="description">
        <h3>{this.props.txt}</h3>
      </div>
    );
  }
}

export default DescrTxt;
