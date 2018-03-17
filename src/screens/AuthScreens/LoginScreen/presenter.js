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

const LoginScreen = (props, context) => {
  imageHeight = new Animated.Value(IMAGE_HEIGHT);
  
  return (
  <KeyboardAvoidingView style={styles.container}
                        behavior="padding">
    <StatusBar barStyle={"dark-content"}/>
    <View style={styles.header}>
      <Animated.Image style={[styles.logo, { height: imageHeight }]} source={require("../../../assets/global/logo.png")} resizeMode="contain"/>
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
        selectionColor={"#FED731"}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        name="password"
        value={props.passwordValue}
        onChangeText={props.handlePassword}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        selectionColor={"#FED731"}
        returnKeyType={"send"}
        onSubmitEditing={props.handleSubmit}
      />
      <TouchableOpacity style={styles.touchable} onPressOut={props.handleSubmit}>
        <View style={styles.button}>
          {props.submittedValue ? (
            <ActivityIndicator size="small" color="white"/>
          ) : (
            <Text style={styles.buttonText}> Log In </Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}> Login with Facebook </Text>
        </View>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
)};

LoginScreen.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  submittedValue: PropTypes.bool.isRequired,
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const { width, height } = Dimensions.get('window');

export const IMAGE_HEIGHT = 70;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    // height: height
  },
  logo: {
    width: 70,
    height: 60,
    marginTop: 150
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 5,
    // marginTop: 0,
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


export default LoginScreen;