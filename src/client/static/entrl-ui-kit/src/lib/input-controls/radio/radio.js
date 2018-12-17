import React, { Component } from "react";

import "./radio.css";

export default class Radio extends Component {
  render() {
    const { value, checked, disabled, onChange } = this.props;
    return (
      <label className="radio-box-label">
        <input
          type="radio"
          className="radio-box"
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
      </label>
    );
  }
}
