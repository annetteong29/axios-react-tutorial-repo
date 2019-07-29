import React, { Component } from 'react';

import API from '../src/utils/API';
import User from './User';
import womanIcon from '../src/assets/images/woman-avatar.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    }
  }

    render() {
      const { isLoading, name, avatar, email } = this.state;

      return <User 
        isLoading={isLoading}
        name={name}
        avatar={avatar}
        email={email} />;
    }

  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
  }
}

export default App;