import React, { Component } from "react";

import "./checkbox.css";

export default class Checkbox extends Component {
  render() {
    const { value, checked, disabled } = this.props;
    return (
      <label className="check-box-label">
        <input
          type="checkbox"
          className="check-box"
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={this.onChange}
        />
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
      </label>
    );
  }
}
