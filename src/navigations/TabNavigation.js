import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HomeRoute from "../routes/HomeRoute";
import ProfileRoute from "../routes/ProfileRoute";


const TabNavigation = TabNavigator({
  Home: {
    screen: HomeRoute,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "ios-home" : "ios-home-outline"}
          size={30}
          color={"black"}
        />
      )
    }
  },
  ProfileDetail: {
    screen: ProfileRoute,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "ios-person" : "ios-person-outline"}
          size={30}
          color={"black"}
        />
      )
    }
  }},
  );


export default TabNavigation;
