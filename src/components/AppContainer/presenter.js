import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import AuthSwiper from '../../navigations/AuthSwiper'
import RootNavigation from "../../navigations/RootNavigation";



class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        {/*{console.log("\nLOGGEDIN ")}*/}
        {/*{console.log(isLoggedIn)}*/}
        {isLoggedIn && profile ? <AuthSwiper /> : <RootNavigation />}
      </View>
    )
  };
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
