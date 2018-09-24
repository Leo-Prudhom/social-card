import React, { Component } from "react";
import "./css/UsrName.css";

class UsrName extends Component {
  render() {
    return (
      <div id="usrInfos">
        <h3>{this.props.nameUsr}</h3>
      </div>
    );
  }
}

export default UsrName;
