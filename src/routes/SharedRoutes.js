import React, { Component } from 'react';
import LikeScreen from "../screens/LikeScreen";
import CommentScreen from "../screens/CommentScreen";
import NavigationButton from "../components/NavigationButton";


const SharedRoutes = {
  Like: {
    screen: LikeScreen,
    navigationOptions: {
      headerTitle: "Like"
    }
  },
  Comment: {
    screen: CommentScreen,
    navigationOptions: {
      headerTitle: "Comment"
    }
  }
};


const SharedOptions = {
  navigationOptions: {
    headerLeft: props => <NavigationButton iconName={"ios-arrow-back"} {...props} />,
    headerStyle: {
      backgroundColor: "#FBFBFB"
    }
  }
};

export { SharedOptions };

export default SharedRoutes;