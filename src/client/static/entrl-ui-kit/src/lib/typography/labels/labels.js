import React, { Component } from "react";

import "./labels.css";

export default class Label extends Component {
  render() {
    const { text, fw, fs, fc } = this.props;

    let classNames = fw + " " + fs + " " + fc;

    return <span className={classNames}>
      {text}
	    {React.Children.map(this.props.children, (child, idx) => {
		    return child;
	    })}
    </span>;
  }
}
