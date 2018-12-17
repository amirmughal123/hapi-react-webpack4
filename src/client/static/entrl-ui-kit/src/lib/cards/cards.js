import React, { Component } from "react";

import "./cards.css";

export default class Cards extends Component {
  render() {
    const { color } = this.props;
    let optionClass = color !== undefined ? " cards-wrapper—bg-" + color : "";
    let classNames = "cards-wrapper" + optionClass;
    return (
      <div className={classNames}>
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
      </div>
    );
  }
}
