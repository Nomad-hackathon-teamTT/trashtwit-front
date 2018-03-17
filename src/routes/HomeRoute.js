import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import SharedRoutes, { SharedOptions } from "./SharedRoutes";
import NavigationButton from '../components/NavigationButton';
import PostScreen from '../screens/PostScreen'
import ProfileScreen from '../screens/ProfileScreen'

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
            onPress={() => navigation.navigate("Post")}
            iconName={"ios-person-outline"}
          />
        ),
        headerRight: (
          <NavigationButton
            onPress={() => navigation.navigate("Post")}
            iconName={"ios-create-outline"}
          />
        )
      })
    },
    Post: {
      screen: PostScreen,
    },
    Post: {
      screen: ProfileScreen,
    },
    ...SharedRoutes
  },
  {
    ...SharedOptions
  }
);

export default HomeRoute;
