import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="test">
        <h1> Home Page </h1>
      </div>
    );
  }
}

Index.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

Index.defaultProps = {
  user: null
};

export default Index;
