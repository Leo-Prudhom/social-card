import React, { Component } from "react";
import "./css/Card.css";
import UsrJob from "./UsrJob";
import UsrName from "./UsrName";
import DescrTxt from "./DescrTxt";
import StyledDiv from "./StyledDiv";

class Card extends Component {
  render() {
    return (
      <StyledDiv stylizedColor={this.props.color}>
        <UsrJob job={this.props.userJob} />
        <DescrTxt txt={this.props.descrTxt} />
        <UsrName nameUsr={this.props.userName} />
      </StyledDiv>
    );
  }
}

export default Card;
