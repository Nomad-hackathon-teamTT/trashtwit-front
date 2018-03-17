import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, Materialicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'; // Makes App loading to wait until the store is loaded.
import configureStore from './src/redux/configureStore';
import AppContainer from './src/components/AppContainer'

const { store, persistor } = configureStore();

store.dispatch({ type: "LOG_OUT"} );

class App extends React.Component {
  state = {
    loadingComplete: false
  };
  render() {
    const { loadingComplete } = this.state;
    if (!loadingComplete) {
      return (
        <AppLoading
          startAsync={this._handleAssetAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleLoadingFinishAsync}
        />
      )
    }
    // Store is a redux store where we store all the states
    // Persistor gets stores from the disk
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    )
  }
  _handleAssetAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./src/assets/global/logo.png")
      ]),
      Font.loadAsync([
        ...Ionicons.font,
        ...Materialicons.font
      ])
    ])
  };
  _handleLoadingError = error => {
    console.log(error)
  };
  _handleLoadingFinishAsync = async () => {
    this.setState({
      loadingComplete: true
    })
  };
}

// const styles = StyleSheet.create({
//   container: {
// 	  flex: 1,
// 	  backgroundColor: '#fff',
// 	  alignItems: 'center',
// 	  justifyContent: 'center',
//   },
// });

export default App;