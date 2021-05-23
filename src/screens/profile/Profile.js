import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/header/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        {/** Header component continued here as well */}
        <Header />

        <div style={{ margin: 10 }}>
          Profile Page
        </div>
      </div>
    )
  }
}

export default Profile;
