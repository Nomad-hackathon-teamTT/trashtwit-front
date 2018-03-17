import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import SharedRoutes, { SharedOptions } from "./SharedRoutes";
import NavigationButton from '../components/NavigationButton';

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          <Image
            source={require("../assets/global/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        ),
        headerLeft: (
          <NavigationButton
            onPress={() => navigation.navigate("TakePhoto")}
            iconName={"ios-camera-outline"}
          />
        )
      })
    },
    ...SharedRoutes
  },
  {
    ...SharedOptions
  }
);

export default HomeRoute;