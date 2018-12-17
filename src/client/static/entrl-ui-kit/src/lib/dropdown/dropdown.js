import React, { Component } from "react";

import Card from "../card/card";
import Icon from "../icon/icon";
import Label from "../typography/labels/labels";

import "./dropdown.css";

export default class Dropdown extends Component {
  state = {
    open: false
  };

  toggleDropdown = (e) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {zIndex} = this.props;
    let dropdownState = this.state.open ? "open" : "close";

    return (
      <div className={`dropdown ${dropdownState}`}>
        <Card zIndex={zIndex} onClick={this.toggleDropdown}>
          <Label text="Dropdown" fw="fw-medium" fs="fs-16" fc="c-dark" />
          <Icon icon="dropdown-arrow"/>
        </Card>
        <Card zIndex={zIndex}>
          {React.Children.map(this.props.children, (child, idx) => {
            return child;
          })}
        </Card>
      </div>
    );
  }
}
