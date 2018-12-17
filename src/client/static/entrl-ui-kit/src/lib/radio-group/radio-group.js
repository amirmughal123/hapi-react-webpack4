import React, { Component } from "react";

import "./radio-group.css";

export default class RadioGroup extends Component {
  state = {
    value: this.props.children[0].props.value
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <ul className="radio-list-group">
        {React.Children.map(this.props.children, (child, idx) => {
          return (
            <li className="radio-list-group-item">
              {React.cloneElement(child, {
                checked: child.props.value === this.state.value,
                onChange: this.onChange
              })}
            </li>
          );
        })}
      </ul>
    );
  }
}

// TODO: повесить обработку ошибок с уничтожением блока
