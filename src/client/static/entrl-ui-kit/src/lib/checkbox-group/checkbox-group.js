import React, { Component } from "react";

import "./checkbox-group.css";

export default class CheckboxGroup extends Component {
  render() {
    return (
      <ul className="checkboxes-list-group">
        {React.Children.map(this.props.children, (child, idx) => {
          return <li className="checkboxes-list-group-item">{child}</li>;
        })}
      </ul>
    );
  }
}
