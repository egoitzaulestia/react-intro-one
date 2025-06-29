import React, { Component } from "react";

export default class PersonClass2 extends Component {
  render() {
    return (
      <span>
        {this.props.name} {this.props.surname}, {this.props.age}
      </span>
    );
  }
}
