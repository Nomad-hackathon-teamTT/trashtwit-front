import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';

const SignupScreen = (props) => (
  <KeyboardAvoidingView
    style={[styles.container]}
    keyboardVerticalOffset={100}
    behavior="padding"
  >
    <StatusBar barStyle={"dark-content"}/>
    <View style={styles.header} on>
      <Animated.Image style={styles.logo} source={require("../../../assets/global/logo.png")} resizeMode="stretch"/>
    </View>
    <View style={styles.content}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        name="username"
        value={props.usernameValue}
        onChangeText={props.handleUsername}
        autoCapitalize={"none"}
        autoCorrect={false}
        selectionColor={"#FF6262"}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        name="email"
        value={props.emailValue}
        onChangeText={props.handleEmail}
        autoCapitalize={"none"}
        autoCorrect={false}
        selectionColor={"#FF6262"}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password 1"
        name="password"
        value={props.password1Value}
        onChangeText={props.handlePassword1}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        selectionColor={"#FF6262"}
        returnKeyType={"send"}
        onSubmitEditing={props.submit}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password 2"
        name="password"
        value={props.password2Value}
        onChangeText={props.handlePassword2}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        selectionColor={"#FF6262"}
        returnKeyType={"send"}
        onSubmitEditing={props.submit}
      />
      <TouchableOpacity style={styles.touchable} onPressOut={props.handleSubmit}>
        <View style={styles.button}>
          {props.submittedValue ? (
            <ActivityIndicator size="small" color="white"/>
          ) : (
            <Text style={styles.buttonText}> Sign Up </Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}> Sign up with Facebook </Text>
        </View>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

SignupScreen.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  password1Value: PropTypes.string.isRequired,
  password2Value: PropTypes.string.isRequired,
  submittedValue: PropTypes.bool.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  handlePassword1: PropTypes.func.isRequired,
  handlePassword2: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  logo: {
    width: 70,
    height: 60,
    marginTop: 50,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    marginBottom: 150,
  },
  fbContainer: {
    marginTop: 50
  },
  fbView: {
    flexDirection: "row",
    alignItems: "center"
  },
  fbText: {
    color: "#3E99EE",
      marginLeft: 10,
      fontWeight: "600",
      fontSize: 14
  },
  textInput: {
    fontSize: 12,
    width: width - 100,
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    marginBottom: 15,
    paddingHorizontal: 15
  },
  touchable: {
    marginTop: 10,
  },
  button: {
    width: width - 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FF6262",
    paddingHorizontal: 7,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textAlign: "center"
  }
});


export default SignupScreen;