import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    } 
    this.onLoginSucess = this.onLoginSucess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    //reset error if signin with correct password afterwards
    this.setState({
      error: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSucess();
      })
      .catch(()=> {
        //creates an account if failed
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.onLoginSucess();
          })
          .catch(() => {
            this.onLoginFailed();
          });
      });
  }

  onLoginSucess() {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: '',
    });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    }

    return (
      <Button handlePress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'}
            placeholder={'i.e. user@gmail.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input 
            label={'Password'}
            placeholder={'i.e. password'}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};


export default LoginForm;
