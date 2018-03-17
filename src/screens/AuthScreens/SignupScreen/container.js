import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignScreen, { styles, IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './presenter';
import { Alert, Animated, Keyboard, } from "react-native";

class Container extends Component {
  state = {
    fullname: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
    submitted: false,
  };
  static propTypes = {
    signup: PropTypes.func.isRequired
  };
  render() {
    const { fullname, email, username, password1, password2, submitted } = this.state;
    return (
      <SignScreen
        fullnameValue={fullname}
        emailValue={email}
        usernameValue={username}
        password1Value={password1}
        password2Value={password2}
        submittedValue={submitted}
        handleFullname={this._handleFullname}
        handleEmail={this._handleEmail}
        handleUsername={this._handleUsername}
        handlePassword1={this._handlePassword1}
        handlePassword2={this._handlePassword2}
        handleSubmit={this._handleSubmit}
        // componentWillMount={this._componentWillMount}
        // componentWillUnmount={this._componentWillUnmount}
        // keyboardWillShow={this._keyboardWillShow}
        // keyboardWillHide={this._keyboardWillHide}
      />
    )
  }
  
  constructor(props) {
    super(props);
    
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  
  _componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }
  
  _componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  
  _keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
    ]).start();
  };
  
  _keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
    ]).start();
  };
  
  
  _handleFullname = text => {
    this.setState({fullname: text });
  };
  _handleEmail = text => {
    this.setState({email: text });
  };
  _handleUsername = text => {
    console.log(this.state);
    this.setState({username: text });
  };
  _handlePassword1 = text => {
    console.log(this.state);
    this.setState({password1: text });
  };
  _handlePassword2 = text => {
    console.log(this.state);
    this.setState({password2: text });
  };
  _handleSubmit = async () => {
    const { fullname, email, username, password1, password2, submitted } = this.state;
    const { signup } = this.props
    if (!submitted) {
      if (fullname && email && username && password1 && password2){
        this.setState({
          submitted: true
        });
        const signupResult = await signup(fullname, email, username, password1, password2);
        if (!signupResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({ submitted: false });
        } else {
          Alert.alert("Sign up successful!");
          this.setState({ submitted: false });
        }
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;