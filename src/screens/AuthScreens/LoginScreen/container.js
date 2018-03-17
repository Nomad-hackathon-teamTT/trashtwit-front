import React, { Component } from 'react';
import LoginScreen from './presenter';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

class Container extends Component {
  state =  {
    username: "",
    password: "",
    submitted: false
  };
  static propTypes = {
    login: PropTypes.func.isRequired
  };
  
  render() {
    const { username, password, submitted } = this.state;
    return (
      <LoginScreen
        usernameValue={username}
        passwordValue={password}
        submittedValue={submitted}
        handleUsername={this._handleUsername}
        handlePassword={this._handlePassword}
        handleSubmit={this._handleSubmit}
      />
    )
  }
  _handleUsername = text => {
    console.log(this.state);
    this.setState({username: text });
  };
  _handlePassword = text => {
    console.log(this.state);
    this.setState({password: text });
  };
  _handleSubmit = async () => {
    const { username, password, submitted } = this.state;
    const { login } = this.props;
    if (!submitted) {
      if (username && password){
        this.setState({
          submitted: true
        });
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({ submitted: false });
        }
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;