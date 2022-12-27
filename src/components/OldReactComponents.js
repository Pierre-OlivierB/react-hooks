import React, { Component } from "react";

class OldReactComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Test",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    //Algo à faire quandmonté
  }
  handleClick() {
    //Algo
  }
  render() {
    return <div></div>;
  }
}

export default OldReactComponents;
