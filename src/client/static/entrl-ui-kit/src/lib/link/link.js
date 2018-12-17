import React, { Component } from "react";

import "./link.css";

export default class Link extends Component {
  render() {
    const { text, link, eClass, onClick, fw, fs, fc } = this.props;
	  let optionClass = eClass !== undefined ? " " + eClass : "";
    let classNames = `${fw} ${fs} ${fc}` + optionClass;

    return (
      <a href={link} className={classNames} onClick={onClick}>
        {text}
      </a>
    );
  }
}
