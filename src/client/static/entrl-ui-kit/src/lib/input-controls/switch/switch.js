import React, { Component } from "react";

import "./switch.css";

export default class Switch extends Component {
  render() {
    const { isChecked, disabled } = this.props;
    
    return (
      <label className="switch-label">
        <input type="checkbox" checked={isChecked} disabled={disabled}/>
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
        <span className="switch-slider" />
      </label>
    );
  }
}
