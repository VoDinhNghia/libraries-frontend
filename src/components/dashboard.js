import React, { Component } from "react";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Dashboard page</h3>
        </header>
      </div>
    );
  }
}
