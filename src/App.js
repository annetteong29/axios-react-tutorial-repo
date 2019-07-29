import React, { Component } from 'react';
import axios from 'axios';

import API from '../src/utils/API';
import User from './User';
import womanIcon from '../src/assets/images/woman-avatar.png';
import { tsThisType } from '@babel/types';

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

  
  // async allows us to await certain actions inside
  async componentDidMount() {

    try {
      // Load async data from an inexistent endpoint.
      let userData = await axios.get("/in")
        .then(resp => 
          console.log(resp.data, resp.status, resp.headers, resp.statusText),
          );
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
      // e: Error: Request failed with status code 404
    }

    /*
    // Load async data.
    let userData = await API.get('/', {
      params: {
        results: 1, // number of results expected
        inc: 'name,email,picture' // details we expect
      }
    }) 
    //parse results for easy use
    userData = userData.data.results[0];

    // Update state with new data.
    const name = `${userData.name.first} ${userData.name.last}`;
    const avatar = userData.picture.large;
    const email = userData.email;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name, avatar, email
      }
    })

    // Re-render of our component will be triggered.
    */
    
  }
}

export default App;