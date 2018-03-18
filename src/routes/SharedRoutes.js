import React, { Component } from 'react';
import CommentScreen from "../screens/CommentScreen";
import NavigationButton from "../components/NavigationButton";


const SharedRoutes = {
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