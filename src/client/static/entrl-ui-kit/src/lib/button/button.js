import React, {Component} from 'react';

import './button.css';

export default class Button extends Component {
  render() {
    const {eClass} = this.props;
    
    return (
      <div className={eClass} role="button">
        {React.Children.map(this.props.children, (child) => {
          return child;
        })}
      </div>
    );
  }
}
