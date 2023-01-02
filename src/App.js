import "./App.css";
import React, { Component } from "react";
import Basicinfo from "./component/basicinfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: `chloe`,
      lastName: `Pratas`,
      title: ``,
    };
  }
  onchange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <h1>Test </h1>
        <Basicinfo name={this.state} change={this.onchange} />
      </>
    );
  }
}

export default App;
