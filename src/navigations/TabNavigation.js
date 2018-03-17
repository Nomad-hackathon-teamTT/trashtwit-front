import React from "react";
import { View } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationRoute from "../routes/NotificationRoute";
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
  SearchDetail: {
    screen: SearchRoute,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "ios-search" : "ios-search-outline"}
          size={30}
          color={"black"}
        />
      )
    }
  },
  Notification: {
    screen: NotificationRoute,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "ios-heart" : "ios-heart-outline"}
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