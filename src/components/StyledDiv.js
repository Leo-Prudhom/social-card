import styled from "styled-components";
import Card from "./Card";

const StyledDiv = styled.div`
    width: 800px;
    height: 300px;
    border: 1px solid black;
    margin: auto;
    margin-bottom : 1%;
    margin-top : 1%;
    background-color: ${props =>
      props.stylizedColor ? props.stylizedColor : "#3a66ad"}`;

export default StyledDiv;
