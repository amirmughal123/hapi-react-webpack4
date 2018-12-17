import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./header.css";

export default class Header extends Component {
  state = {
    active: this.props.children[0].props.id,
    slider: {
      width: null,
      left: null
    },
    componentDidMount: function() {
      ReactDOM.findDOMNode(this.refs.HeaderSlider);
    }
  };

  toggleProperty = e => {
    this.setState({
      active: e.target.id,
      slider: {
        width: e.target.offsetWidth,
        left: e.target.offsetLeft
      }
    });
  };

  render() {
    const {zIndex} = this.props;
    let classNames = `navbar card—z-index-${zIndex}`;
    return (
      <nav className={classNames}>
        <div className="navbar-inner">
          <ul className="navbar-list">
            {React.Children.map(this.props.children, (child, idx) => {
              return (
                <li className="navbar-list-item">
                  {React.cloneElement(child, {
                    active: child.props.id === this.state.active,
                    onClick: this.toggleProperty
                  })}
                </li>
              );
            })}
          </ul>
        </div>
        <HeaderSlider
            offsetWidth={this.state.slider.width}
            offsetLeft={this.state.slider.left}/>
      </nav>
    );
  }
}

const HeaderSlider = ({ offsetWidth, offsetLeft }) => {
  let style = {
    width: `${offsetWidth}px`,
    left: `${offsetLeft}px`
  };
  return <span className="navbar-slider" style={style} />;
};
