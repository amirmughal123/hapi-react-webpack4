import React, { Component } from "react";

import "./card.css";

export default class Card extends Component {
  render() {
    const { zIndex, onClick, eClass } = this.props;
    let optionClass = eClass !== undefined ? " " + eClass : "";
    let classNames = `card-block card—z-index-${zIndex}` + optionClass;
    return (
      <div className={classNames} onClick={onClick}>
        {React.Children.map(this.props.children, (child, idx) => {
          return child;
        })}
      </div>
    );
  }
}
