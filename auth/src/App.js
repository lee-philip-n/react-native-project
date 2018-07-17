import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import config from '../config';
//automatically connects to index.js if it exists
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    }
  }

  componentDidMount() {
    firebase.initializeApp(config);
    //do something when signed on or off
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button handlePress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
