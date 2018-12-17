import React, { Component } from "react";

import "./container.css";

export default class Div extends Component {
  render() {
    const { eClass, onClick } = this.props;
    return (
      <div className={eClass} onClick={onClick}>
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
      </div>
    );
  }
}
