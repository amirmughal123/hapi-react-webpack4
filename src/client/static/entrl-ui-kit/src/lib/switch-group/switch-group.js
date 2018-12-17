import React, { Component } from "react";

import "./switch-group.css";

export default class SwitchGroup extends Component {
  render() {
    return (
      <ul className="switches-list-group">
        {React.Children.map(this.props.children, (child, idx) => {
          return <li className="switches-list-group-item">{child}</li>;
        })}
      </ul>
    );
  }
}
