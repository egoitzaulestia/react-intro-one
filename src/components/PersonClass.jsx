import React, { Component } from "react";

export default class PersonClass extends Component {
  render() {
    return (
      <span>
        {this.props.name} {this.props.surname}, {this.props.age} years old.
      </span>
    );
  }
}
