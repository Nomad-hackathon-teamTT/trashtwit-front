import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';

const AuthSwiper = () => (
  <Swiper style={styles.wrapper} loop={false}>
    <View style={styles.slide1}>
      <LoginScreen/>
    </View>
    <View style={styles.slide2}>
      <SignupScreen/>
    </View>
  </Swiper>
);

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AuthSwiper;
