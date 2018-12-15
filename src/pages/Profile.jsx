import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  render() {
    const { email } = this.state;
    const { user } = this.props;

    return (
      <div>
        <h1>
          My Profile
        </h1>
        <h3>
          Name:
          {user.name}
        </h3>
        <h4>
          Email:
          {email}
        </h4>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default Profile;
