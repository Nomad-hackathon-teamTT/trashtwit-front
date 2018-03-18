import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import AuthSwiper from '../../navigations/AuthSwiper'
import RootNavigation from "../../navigations/RootNavigation";



class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired
  };
  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        {/*{console.log("\nLOGGEDIN ")}*/}
        {/*{console.log(isLoggedIn)}*/}
        {/*{isLoggedIn && profile ? <AuthSwiper /> : <RootNavigation />}*/}
        {isLoggedIn && profile ? <RootNavigation /> : <AuthSwiper/> }
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
