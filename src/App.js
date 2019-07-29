import React, { Component } from 'react';
import User from './User';
import womanIcon from '../src/assets/images/woman-avatar.png';

class App extends Component {
  render() {
    return <User name="Jessica Doe"
      avatar={womanIcon}
      email="hello@jessica.com" />;
  }
}

export default App;