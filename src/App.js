import React, { Component } from "react";
import Card from "./components/Card";
import CustomPicker from "react-color";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Your Name",
      job: "Your Job",
      txt: "Some text here",
      color: "#3a66ad"
    };
    //this avoid to declare a separate method handleChange for each input field
    this.handleChange = this.handleChange.bind(this);
  }

  /**
  * we get the evt.target.name (which will be either "job" or "txt")
  and use it to target the key on our `state` object with the same name, using bracket syntax
  */
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <div id="App">
        {/*Faire un formulaire pour modifier le state de ma carte*/}
        <div id="formSetData">
          <p>
            <input
              name="job"
              type="text"
              placeholder="Your job"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              name="txt"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="text"
              name="color"
              placeholder="Pick a color and paste it here"
              onChange={this.handleChange}
            />
          </p>

          <CustomPicker ref={this.state.color} />
        </div>

        <Card
          userJob={this.state.job}
          descrTxt={this.state.txt}
          userName={this.state.name}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
